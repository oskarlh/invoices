import { HasId, Id, Invoice, WithoutId } from './types';

const localStorageKey = 'invoicing';

interface Storage {
  nextId: Id;
  invoices: Invoice[];
}

const initialStorage: Storage = {
  invoices: [
    {
      currency: 'SEK',
      id: 451,
      lineItems: [
        {
          baseValue: 40.5,
          count: 10,
          description: 'Potatoes',
        },
      ],
      recipient: 'Example',
    },
  ],
  nextId: 20380451,
};

type ListName = Exclude<keyof Storage, 'nextId'>;
type ItemInList<LN extends ListName> = Storage[LN][Id];

function loadStorage(): Storage {
  const json = localStorage.getItem(localStorageKey);
  return json ? JSON.parse(json) : initialStorage;
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
  const itemInStorage: ItemInList<LN> | undefined = loadStorage()[listName][id];
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
