import { ComponentType } from 'react';

export interface CellComponentProps<Row> {
  extra: any;
  row: Row;
}

export interface HeadingComponentProps {
  extra: any;
}

export type CellComponent<Row> = ComponentType<CellComponentProps<Row>>;

export type HeadingComponent = ComponentType<HeadingComponentProps>;

export interface SimpleTableColumn<Row> {
  cell: ComponentType<CellComponentProps<Row>> | keyof Row;
  cellClassName?: string;
  compare?: ((a: Row, b: Row, extra: any) => number) | keyof Row;
  heading?: HeadingComponent | string;
}

export interface SimpleTableProps<Row> {
  className?: string;
  columns: SimpleTableColumn<Row>[];
  extraForCells?: any;
  extraForComparators?: any;
  extraForHeadings?: any;
  rowKey?: ((row: Row) => string | number) | keyof Row; // Used for the key prop
  rows: Row[];
}
