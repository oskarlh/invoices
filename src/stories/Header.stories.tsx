import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from './Header';

export default {
  component: Header,
  title: 'Example/Header',
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
