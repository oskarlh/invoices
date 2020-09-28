import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleTable, { Column } from '.';

interface Row {
  id: number;
  color: string;
  description: string;
  name: string;
}

const columns: Column<Row>[] = [
  {
    heading: 'Name',
    key: 'name',
  },
  {
    heading: 'Description',
    key: 'description',
  },
  {
    heading: 'Color',
    key: 'color',
    renderValue({ color }: Row) {
      return <p style={{ color }}>The color {color}</p>;
    },
  },
];

const rows: Row[] = [
  {
    color: 'green',
    description: 'Description B',
    id: 5,
    name: 'Name 0',
  },
  {
    color: 'red',
    description: 'Description A',
    id: 4,
    name: 'Name 1',
  },
  {
    color: 'blue',
    description: 'Description C',
    id: 6,
    name: 'Name 2',
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
  <SimpleTable columns={columns} rows={rows} uniqueKey="id" {...args} />
);
const StoryTemplate: Story<typeof Template> = Template;

export const Example = StoryTemplate.bind({});
Example.args = {
  rows,
};
