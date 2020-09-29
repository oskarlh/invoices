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
  row: {
    englishNumber: { word },
  },
}: {
  row: Row;
}) {
  return <em>Number {word}</em>;
}

const columns: SimpleTableColumn<Row>[] = [
  {
    cell: 'name',
    compare: 'name',
    heading: 'Name',
  },
  {
    cell: 'fruit',
    compare: 'fruit',
    heading: 'Fruit',
  },
  {
    cell: ColorCell,
    compare: 'color',
    heading: 'Color (custom rendering)',
  },
  {
    cell: EnglishNumberCell,
    compare: (a: Row, b: Row) =>
      a.englishNumber.number - b.englishNumber.number,
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
  <SimpleTable columns={columns} rows={rows} idKey="id" {...args} />
);
const StoryTemplate: Story<typeof Template> = Template;

export const Example = StoryTemplate.bind({});
Example.args = {
  rows,
};
