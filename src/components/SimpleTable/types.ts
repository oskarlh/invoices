import { ComponentType } from 'react';

export type CellComponent<Row> = ComponentType<CellComponentProps<Row>>;

export interface SimpleTableColumn<Row> {
  cell: ComponentType<CellComponentProps<Row>> | (keyof Row & string);
  compare: ((a: Row, b: Row) => number) | (keyof Row & string);
  heading: ComponentType | string;
}

export interface CellComponentProps<Row> {
  row: Row;
}

export interface SimpleTableProps<Row> {
  className?: string;
  columns: SimpleTableColumn<Row>[];
  rows: Row[];
  idKey?: keyof Row; // Used for the key prop
}
