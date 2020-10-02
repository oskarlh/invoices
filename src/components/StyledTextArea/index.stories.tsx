import React, { ReactNode } from 'react';
import { Story, Meta } from '@storybook/react';

import StyledTextArea from '.';

export default {
  component: StyledTextArea,
  title: 'Styled Text Area',
} as Meta;

const Template = ({
  label,
  ...args
}: {
  label?: ReactNode;
  [arg: string]: any;
}) => <StyledTextArea children={label} {...args} />;
const StoryTemplate: Story<typeof Template> = Template;

export const Controlled = StoryTemplate.bind({});
Controlled.args = {
  value: 'Text goes here',
};

export const UncontrolledAndWithLabel = StoryTemplate.bind({});
UncontrolledAndWithLabel.args = {
  defaultValue: 'Text goes here',
  label: 'A label',
};
