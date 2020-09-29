import { SimpleTableColumn } from './types';

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

export function createRowSorter<Row>(
  columnToSortBy: SimpleTableColumn<Row> | undefined,
  sortOrder: -1 | 1
) {
  let sortRows = (rows: Row[]) => rows;
  if (columnToSortBy) {
    const { compare: comparisonSpec } = columnToSortBy;

    let comparator: (a: Row, b: Row) => number;
    if (typeof comparisonSpec === 'string') {
      const key = comparisonSpec as keyof Row;
      comparator = (a: Row, b: Row) =>
        sortOrder * (Number(a[key] > b[key]) - Number(a[key] < b[key]));
    } else {
      const customComparator = comparisonSpec as (a: Row, b: Row) => number;
      comparator = (a: Row, b: Row) => sortOrder * customComparator(a, b);
    }

    sortRows = (rows: Row[]) => [...rows].sort(comparator);
  }
  return sortRows;
}
