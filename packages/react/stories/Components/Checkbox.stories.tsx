import React,{useState} from 'react';
import { Checkbox,CheckboxProps } from '../../src/Components/Checkbox'; 
import { Story } from '@storybook/react';



export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template: Story <CheckboxProps> = (args) => {
    const [checked, setchecked] = useState<boolean>(false)
    const toggleCheck = ()=> setchecked(check=>!check);
    return(<Checkbox {...args} checked={checked} onClick={toggleCheck}/>)
};

export const Primary = Template.bind({});
Primary.args = {
    placeholder:'text'

} as CheckboxProps;