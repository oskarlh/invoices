import React from 'react';
import { Story, Meta } from '@storybook/react';

import StyledInput from '.';

export default {
  component: StyledInput,
  title: 'Styled Input Field',
} as Meta;

const Template = (args: any) => <StyledInput {...args} />;
const StoryTemplate: Story<typeof Template> = Template;

export const TextInput = StoryTemplate.bind({});
TextInput.args = {
  placeholder: 'Write a text',
  type: 'text',
};

export const NumberInput = StoryTemplate.bind({});
NumberInput.args = {
  placeholder: 'Write a number',
  type: 'number',
};
