import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

export interface CheckboxProps {
  checked?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  placeholder?: string;
}

export function Checkbox(props: CheckboxProps) {
  console.log(props);
  return (
    <CheckBoxContainer>
      <CheckBoxToggler checked={props.checked} onClick={props.onClick} />
      <CheckBoxText>{props.placeholder}</CheckBoxText>
    </CheckBoxContainer>
  );
}

const CheckBoxContainer = styled.div`
  display: flex;
`;
const CheckBoxToggler = styled.span<{ checked?: boolean }>`
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  border: 1px solid #bababa;
  box-sizing: border-box;
  border-radius: 2px;
  ${(props) => {
    if (props.checked) return `background: #1D62D1;`;
    else return `background: #ffffff;`;
  }}
  &:hover{
    border: 1px solid #1D62D1;
  }

`;
const CheckBoxText = styled.label``;
