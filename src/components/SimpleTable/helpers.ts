import { SimpleTableColumn } from './types';

// This should be a tuple type [Row, number] but there's an eslint bug (fixed in later version)
// which makes this fail
type RowAndIndex<Row> = (Row | number)[];
export function createRowSorter<Row>(
  columnToSortBy: SimpleTableColumn<Row> | undefined,
  sortOrder: -1 | 1
) {
  let sortRows = (rows: Row[]) => rows.map((row, index) => [row, index]);
  if (columnToSortBy) {
    const { compare: comparisonSpec } = columnToSortBy;

    let comparator: (a: RowAndIndex<Row>, b: RowAndIndex<Row>) => number;
    if (typeof comparisonSpec === 'string') {
      const key = comparisonSpec as keyof Row;
      comparator = ([a]: RowAndIndex<Row>, [b]: RowAndIndex<Row>) =>
        sortOrder *
        (Number((a as Row)[key] > (b as Row)[key]) -
          Number((a as Row)[key] < (b as Row)[key]));
    } else {
      const customComparator = comparisonSpec as (a: Row, b: Row) => number;
      comparator = ([a]: RowAndIndex<Row>, [b]: RowAndIndex<Row>) =>
        sortOrder * customComparator(a as Row, b as Row);
    }

    sortRows = (rows: Row[]) =>
      rows.map((row, index) => [row, index]).sort(comparator);
  }
  return sortRows;
}

export function rowElementKey<Row>(
  row: Row,
  idKey: keyof Row | undefined,
  index: number
) {
  let result: number | string = index;
  if (idKey !== undefined) {
    const value: any = row[idKey];
    if (value || value === '' || value === 0) {
      result = 'u' + row[idKey];
    }
  }
  return result;
}
