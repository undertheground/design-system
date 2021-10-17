import React from 'react';
import { Link, LinkProps } from '../../src/Components/Link';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Link',
  component: Link,
};

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'test',
  placeholder: 'Link',
  href: '#',
  target:'_blank',
  place: 'navbar',
  darkMode: false,
} as LinkProps;
