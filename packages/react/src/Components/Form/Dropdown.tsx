import React , { FunctionComponent} from 'react';
import styled from 'styled-components';
// import colors from '@undertheground/color';



export type DropdownProps = {
    id?: string;


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

