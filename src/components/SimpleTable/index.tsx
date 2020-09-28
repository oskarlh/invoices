import React, { ReactElement, ReactNode, memo, useState } from 'react';

import { classNames } from 'utilities';

import styles from './styles.module.css';

export interface Column<Row> {
  compareValues?: (a: Row, b: Row) => number;
  heading: ReactNode;
  renderValue?: (value: Row) => ReactNode;
  key: keyof Row & string;
}
export interface Props<Row> {
  columns: Column<Row>[];
  rows: Row[];
  uniqueKey?: keyof Row & string; // Used for the key prop
}

function SimpleTable<Row>({
  columns,
  rows,
  uniqueKey,
}: Props<Row>): ReactElement {
  const [columnToSortBy, setColumnToSortBy] = useState<Column<Row> | null>(
    null
  );

  const [sortOrder, setSortOrder] = useState<1 | -1>(1);

  const onColumnHeaderClick = (column: Column<Row>) => {
    if (columnToSortBy !== column || sortOrder === 1) {
      setColumnToSortBy(column);
    } else {
      setColumnToSortBy(null);
    }
    setSortOrder(columnToSortBy === column ? -1 : 1);
  };

  let sortRows = (rows: Row[]) => rows;
  if (columnToSortBy) {
    const key = columnToSortBy.key;
    const comparator =
      columnToSortBy.compareValues ||
      ((a: Row, b: Row) =>
        sortOrder * (Number(a[key] > b[key]) - Number(a[key] < b[key])));
    sortRows = (rows: Row[]) => [...rows].sort(comparator);
  }

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <td
              key={column.key}
              onClick={() => onColumnHeaderClick(column)}
              className={classNames(
                styles.columnHeader,
                column === columnToSortBy && styles.activeColumnHeader
              )}
            >
              {column.heading}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortRows(rows).map((row, index) => (
          <tr key={String(uniqueKey ? row[uniqueKey] : index)}>
            {columns.map(({ key, renderValue }) => (
              <td key={key}>
                {renderValue ? renderValue(row) : String(row[key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default memo(SimpleTable);
