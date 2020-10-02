import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleTable from '.';
import { SimpleTableColumn } from './types';

interface Row {
  id: number;
  color: string;
  englishNumber: {
    number: number;
    word: string;
  };
  fruit: string;
  name: string;
}

function ColorCell({ row: { color } }: { row: Row }) {
  return <p style={{ color }}>The color {color}</p>;
}

function EnglishNumberCell({
  extra: prefix,
  row: {
    englishNumber: { word },
  },
}: {
  extra: string;
  row: Row;
}) {
  return <em>{prefix + ' ' + word}</em>;
}

const columns: SimpleTableColumn<Row>[] = [
  {
    cell: 'name',
    heading: 'Name (sorting disabled)',
  },
  {
    cell: 'fruit',
    compare: 'fruit',
    heading: ({ extra: style }) => (
      <span style={style}>Fruit (custom heading)</span>
    ),
  },
  {
    cell: ColorCell,
    compare: 'color',
    heading: 'Color (custom rendering)',
  },
  {
    cell: () => <>Column without heading</>,
  },
  {
    cell: EnglishNumberCell,
    compare: (a: Row, b: Row, orderEnglishNumbersAlphabetically: boolean) =>
      orderEnglishNumbersAlphabetically
        ? a.englishNumber.word.localeCompare(b.englishNumber.word)
        : a.englishNumber.number - b.englishNumber.number,
    heading: 'English numbers (custom sorting and rendering)',
  },
];

const rows: Row[] = [
  {
    color: 'green',
    englishNumber: {
      number: 50,
      word: 'fifty',
    },
    fruit: 'Apple',
    id: 5,
    name: 'Name 0',
  },
  {
    color: 'red',
    englishNumber: {
      number: 6,
      word: 'six',
    },
    fruit: 'Orange',
    id: 4,
    name: 'Name 1',
  },
  {
    color: 'blue',
    englishNumber: {
      number: 10,
      word: 'ten',
    },
    fruit: 'Banana',
    id: 6,
    name: 'Name 2',
  },
  {
    color: '#F70',
    englishNumber: {
      number: 5,
      word: 'five',
    },
    fruit: 'Pineapple',
    id: 7,
    name: 'Name 3',
  },
];

export default {
  argTypes: {
    rows: {
      control: {
        type: 'object',
      },
      name: 'Rows',
    },
  },
  component: SimpleTable,
  title: 'Simple Table',
} as Meta;

const Template = (args: any) => (
  <SimpleTable
    columns={columns}
    extraForCells={args.textBeforeEnglishNumbers}
    extraForComparators={args.orderEnglishNumbersAlphabetically}
    extraForHeadings={args.fruitHeadingStyle}
    rows={rows}
    rowKey="id"
  />
);
const StoryTemplate: Story<typeof Template> = Template;

export const Example = StoryTemplate.bind({});
Example.args = {
  fruitHeadingStyle: { color: '#F00', fontStyle: 'italic' },
  orderEnglishNumbersAlphabetically: false,
  rows,
  textBeforeEnglishNumbers: 'Number',
};
