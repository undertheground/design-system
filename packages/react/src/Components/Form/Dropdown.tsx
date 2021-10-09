import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
// import colors from '@undertheground/color';

interface dropDownItem {
  text: string;
  value: Exclude<string, ''>; //this part must be tested
}

export type DropdownProps = {
  id?: string;
  items?: Array<dropDownItem>;
  onChange?: React.ChangeEvent<HTMLSelectElement>;
  autoFocus?: boolean;
  disabled?: boolean;
  form_id?: string;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
  label?: string;
  placeholder?: string;
  optionsAttributes?: object;
};

export const Dropdown: FunctionComponent<DropdownProps> = (
  props: DropdownProps
) => {
  console.log(props);
  const options = props.items
    ? props.items.map((item, index) => {
        return (
          <StyledOption
            key={index}
            {...props.optionsAttributes}
            value={item.value}
          >
            {item.text}
          </StyledOption>
        );
      })
    : null;
  return (
    <StyledDiv id={props.id}>
      {props.label && <Label color={props.disabled?"#BABABA":"#303030"}>{props.label}</Label>}
      <StyledSelect disabled={props.disabled}>
        {props.placeholder && (
          <StyledOption value={''}>{props.placeholder}</StyledOption>
        )}
        {options}
      </StyledSelect>
    </StyledDiv>
  );
};
const Label = styled.h3`
font-family: 'Mukta Vaani';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${props=>props.color};
`;
const StyledDiv = styled.div`
  
  font-weight: 400;
  font-size: 16px;
`;
const StyledSelect = styled.select`
  padding: 23px 18px;
  background: #ffffff;
  border: 1px solid #bababa;
  box-sizing: border-box;
  border-radius: 2px;
  font-style: normal;
  font-family: 'Mukta Vaani';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #303030;
  &:focus {
    border: 1px solid #1D62D1;
  }
`;
const StyledOption = styled.option``;
