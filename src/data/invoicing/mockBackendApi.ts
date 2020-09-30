import { HasId, Id, Invoice, WithoutId } from './types';

const localStorageKey = 'invoicing';

const modelVersion = 1; // Change this to clear local storage while developing

interface Storage {
  modelVersion: number;
  nextId: Id;
  invoices: Invoice[];
}

const initialStorage: Storage = {
  invoices: [
    {
      currency: 'SEK',
      dueDate: '2020-10-20',
      emailAddress: 'julia@example.com',
      id: 451,
      lineItems: [
        {
          description: 'Potatoes',
          quantity: 100,
          unitPrice: 2.5,
        },
      ],
      notes: 'Julia bought 100 potatoes. Time to pay.',
      paid: false,
      title: 'Purchase of 100 potatoes',
    },
    {
      currency: 'EUR',
      dueDate: '2020-04-12',
      emailAddress: 'marko@example.com',
      id: 123,
      lineItems: [
        {
          description: 'Car, Volvo',
          quantity: 1,
          unitPrice: 250_000,
        },
        {
          description: 'Router, MikroTik',
          quantity: 2,
          unitPrice: 12012,
        },
      ],
      notes: 'I should probably write payment instructions here...',
      paid: false,
      title: 'Car & Router',
    },
  ],
  modelVersion,
  nextId: 20380451,
};

type ListName = Exclude<keyof Storage, 'modelVersion' | 'nextId'>;
type ItemInList<LN extends ListName> = Storage[LN][Id];

function loadStorage(): Storage {
  const json = localStorage.getItem(localStorageKey);
  const data = json ? JSON.parse(json) : null;
  return data && data.modelVersion === modelVersion ? data : initialStorage;
}

function saveStorage(storage: Storage) {
  localStorage.setItem(localStorageKey, JSON.stringify(storage));
}

export async function loadList<LN extends ListName>(
  listName: LN
): Promise<ItemInList<LN>[]> {
  return loadStorage()[listName];
}

export async function loadListItem<LN extends ListName>(
  listName: LN,
  id: Id
): Promise<ItemInList<LN>> {
  const itemInStorage: ItemInList<LN> | undefined = loadStorage()[
    listName
  ].find(({ id: itemId }) => itemId === id);

  if (!itemInStorage) {
    throw new Error('Item not found');
  }
  return itemInStorage;
}

export async function insertNewListItem<LN extends ListName>(
  listName: LN,
  item: WithoutId<ItemInList<LN>>
): Promise<ItemInList<LN>> {
  const storage = loadStorage();
  const itemInStorage = {
    ...item,
    id: storage.nextId++,
  };
  storage[listName].push(itemInStorage);
  saveStorage(storage);
  return itemInStorage;
}

export async function updateListItem<LN extends ListName>(
  listName: LN,
  item: Partial<ItemInList<LN>> & HasId
): Promise<ItemInList<LN>> {
  const storage = loadStorage();
  const list = storage[listName];
  const itemInStorage: ItemInList<LN> | undefined = list.find(
    ({ id }) => id === item.id
  );
  if (!itemInStorage) {
    throw new Error('Item not found');
  }
  Object.assign(itemInStorage, item);
  saveStorage(storage);
  return itemInStorage;
}

export async function deleteListItem<LN extends ListName>(
  listName: LN,
  id: Id
) {
  const storage = loadStorage();
  const list = storage[listName];
  const index = list.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error('Item not found');
  }
  list.splice(index, 1);
}
