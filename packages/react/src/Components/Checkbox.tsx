import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { white, grey73 } from '@undertheground/color/dist/color';

export interface CheckboxProps {
  checked?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  placeholder?: string;
  disabled?: boolean;
}

export function Checkbox(props: CheckboxProps) {
  console.log(props);
  return (
    <CheckBoxContainer>
      <CheckBoxToggler
        checked={props.checked}
        onClick={!props.disabled ? props.onClick : undefined}
      >
        {props.checked && <Checked disabled={props.disabled} />}
      </CheckBoxToggler>
      <CheckBoxText>{props.placeholder}</CheckBoxText>
    </CheckBoxContainer>
  );
}

function Checked(props: { disabled?: boolean }) {
  return (
    <StyledCheck backgroundColor={props.disabled ? grey73 : '#1D62D1'}>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Icons"
        rel="stylesheet"
      />
      <span style={{ fontSize: '0.75rem' }} className={'material-icons'}>
        done
      </span>
    </StyledCheck>
  );
}

const CheckBoxContainer = styled.div`
  display: flex;
`;
const StyledCheck = styled.div<{ backgroundColor?: string }>`
  position: relative;
  top: -0.5px;
  left: -0.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${white};
  background-color: ${(props) => props.backgroundColor};
  height: calc(1rem - 1px);
  width: calc(1rem - 1px);
`;
const CheckBoxToggler = styled.span<{ checked?: boolean }>`
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  border: 1px solid #bababa;
  box-sizing: border-box;
  border-radius: 2px;
  &:hover {
    border: 1px solid #1d62d1;
  }
`;
const CheckBoxText = styled.label``;
