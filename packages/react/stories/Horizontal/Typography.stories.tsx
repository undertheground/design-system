import React from 'react';
import { Typography,TypographyProps } from '../../src/Horizontal/Typography'; 
import { Story } from '@storybook/react';



export default {
  title: 'Components/Link',
  component: Typography,
};

const Template: Story <TypographyProps> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    id: 'test',
    children:"text"
} as TypographyProps;