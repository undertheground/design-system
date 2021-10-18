import React from 'react';
import { Avatar,AvatarProps } from '../../src/Components/Avatar';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'test',
  size:'S'
} as AvatarProps;
