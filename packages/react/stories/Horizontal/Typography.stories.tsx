import React from 'react';
import { Typography,TypographyProps } from '../../src/Horizontal/Typography'; 
import { Story } from '@storybook/react';



export default {
  title: 'Horizontal/typography',
  component: Typography,
};

const Template: Story <TypographyProps> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    id: 'test',
    children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
} as TypographyProps;