import React from 'react';
import { Story, Meta } from '@storybook/react';

import StyledButton from '.';

export default {
  component: StyledButton,
  title: 'Styled Button',
} as Meta;

const Template = (args: any) => <StyledButton {...args} />;
const StoryTemplate: Story<typeof Template> = Template;

export const Button = StoryTemplate.bind({});
Button.args = {
  children: 'Press me',
  type: 'button',
};
