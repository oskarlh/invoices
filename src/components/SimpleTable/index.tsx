import React, { ReactElement, useMemo, useState } from 'react';

import { CellComponent, SimpleTableColumn, SimpleTableProps } from './types';

import styles from './styles.module.css';
import { classNames, typedMemo } from 'utilities';

const SimpleTableRow = typedMemo(function <Row>({
  columns,
  extraForCells,
  row,
}: {
  columns: SimpleTableColumn<Row>[];
  extraForCells?: any;
  row: Row;
}): ReactElement {
  return (
    <tr>
      {columns.map(({ cell, cellClassName }, columnIndex) => (
        <td key={columnIndex} className={cellClassName}>
          {(() => {
            if (typeof cell === 'function' || typeof cell === 'object') {
              const Cell = cell as CellComponent<Row>;
              return <Cell extra={extraForCells} row={row as Row} />;
            } else {
              return String((row as Row)[cell as keyof Row]);
            }
          })()}
        </td>
      ))}
    </tr>
  );
});

function SimpleTable<Row>({
  className,
  columns,
  extraForCells,
  extraForComparators,
  extraForHeadings,
  rowKey,
  rows,
}: SimpleTableProps<Row>): ReactElement {
  const [indexOfColumnToSortBy, setIndexOfColumnToSortBy] = useState<
    number | undefined
  >();
  const columnToSortBy =
    indexOfColumnToSortBy !== undefined &&
    indexOfColumnToSortBy < columns.length
      ? columns[indexOfColumnToSortBy]
      : undefined;

  const [descending, setDescending] = useState(false);

  const unorderedRenderedRows = useMemo(
    () =>
      rows.map((row, rowIndex) => {
        let key: string = '' + rowIndex;
        if (typeof rowKey === 'function') {
          key = 'a' + rowKey(row);
        } else if (rowKey !== undefined) {
          key = 'b' + String(row[rowKey]);
        }
        return (
          <SimpleTableRow
            columns={columns}
            extraForCells={extraForCells}
            key={key}
            row={row}
          />
        );
      }),
    [columns, extraForCells, rowKey, rows]
  );

  const compare = columnToSortBy?.compare;
  const indiciesInSortedOrder = useMemo(() => {
    const indices = [...rows.keys()];
    if (typeof compare === 'function') {
      indices.sort((indexA, indexB) =>
        compare(rows[indexA], rows[indexB], extraForComparators)
      );
    } else if (compare) {
      indices.sort((indexA, indexB) => {
        const valueA = rows[indexA][compare];
        const valueB = rows[indexB][compare];
        return +(valueA > valueB) - +(valueA < valueB);
      });
    }
    return indices;
  }, [compare, extraForComparators, rows]);

  const orderedRenderedRows = useMemo(() => {
    const result = indiciesInSortedOrder.map(
      (index) => unorderedRenderedRows[index]
    );
    if (descending) {
      result.reverse();
    }
    return result;
  }, [indiciesInSortedOrder, unorderedRenderedRows, descending]);

  const renderedColumnsHeadings = useMemo(() => {
    return columns.map((column, index) => {
      const onClick =
        column.compare === undefined
          ? undefined
          : () => {
              setIndexOfColumnToSortBy(
                columnToSortBy === column && descending ? undefined : index
              );
              setDescending(columnToSortBy === column);
            };
      const cn = column === columnToSortBy ? styles.activeColumnHeading : '';
      const content =
        typeof column.heading === 'function' ||
        typeof column.heading === 'object' ? (
          <column.heading extra={extraForHeadings} />
        ) : (
          column.heading
        );

      return (
        <td className={cn} key={index} onClick={onClick}>
          {content}
        </td>
      );
    });
  }, [columnToSortBy, columns, descending, extraForHeadings]);

  return (
    <table className={classNames(styles.table, className)}>
      <thead>
        <tr>{renderedColumnsHeadings}</tr>
      </thead>
      <tbody className={styles.tableBody}>{orderedRenderedRows}</tbody>
    </table>
  );
}

export default typedMemo(SimpleTable);
