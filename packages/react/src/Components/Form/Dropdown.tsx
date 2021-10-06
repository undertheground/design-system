import React , { FunctionComponent} from 'react';
import styled from 'styled-components';
// import colors from '@undertheground/color';


interface dropDownItem{
    text:string,
    value:string
}

export type DropdownProps = {
    id?: string;
    items:Array<dropDownItem>;
    onChange?:React.ChangeEvent<HTMLSelectElement>;
    autoFocus?:boolean;
    disabled?:boolean;
    form_id?:string;
    multiple?:boolean;
    name?:string;
    required?:boolean;
    size?:number;
}


export const Dropdown: FunctionComponent<DropdownProps> = ({
  ...props
}) => {
    console.log(props);
    return (
    <StyledDiv>
        It will be a Dropdown component
    </StyledDiv>
    );
};



const StyledDiv = styled.div`
font-family:"Mukta Vaani";
font-weight: 400;
font-size: 16px;
`;

