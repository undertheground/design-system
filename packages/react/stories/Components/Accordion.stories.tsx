import React from 'react';
import { Accordion, AccordionProps } from '../../src/Components/Accordion';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'test',
  placeholder:'Accordion Number 1',
  children:"Text after opening"
} as AccordionProps;
