import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
// import colors from '@undertheground/color';

interface dropDownItem {
  text: string;
  value: Exclude<string, ''>;//this part must be tested
}

export type DropdownProps = {
  id?: string;
  items: Array<dropDownItem>;
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
  const options = props.items.map((item, index) => {
    return (
      <StyledOption key={index} {...props.optionsAttributes} value={item.value}>
        {item.text}
      </StyledOption>
    );
  });
  return (
    <StyledDiv id={props.id}>
      {props.label ? props.label : null}
      <StyledSelect>
        {props.placeholder && (
          <StyledOption value={''}>{props.placeholder}</StyledOption>
        )}
        {options}
      </StyledSelect>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  font-family: 'Mukta Vaani';
  font-weight: 400;
  font-size: 16px;
`;
const StyledSelect = styled.select``;
const StyledOption = styled.option``;