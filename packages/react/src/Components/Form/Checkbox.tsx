import React , { ComponentProps, FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';


export type CheckBoxProps ={
    id?: string;
    required?: boolean;
    disable?: boolean;
    className?: string;
    label: ReactNode;
    hideLabel?: boolean;
    error?: ReactNode;
}

export const Checkbox: FunctionComponent<CheckBoxProps & ComponentProps<typeof Input>> = ({
    id,
    label,
    error,
    hideLabel,
    ...props
  }) => {
    const errorId = `${id}-error`;
    return (
      <StyledCheckbox>
        <Label>
          <Input
            id={id}
            aria-describedby={errorId}
            aria-invalid={!!error}
            type="checkbox"
            {...props}
          />
          <LabelText>
            <OptionalText hideLabel={props.hideLabel}>{props.label}</OptionalText>
          </LabelText>
        </Label>
        <Error id={errorId}>{error}</Error>
      </StyledCheckbox>
    );
  };


export const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const Label = styled.div`

cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  position: relative;
  height: 1em;
  display: flex;
  align-items: center;

`
export const LabelText = styled.div`

`

export const Input = styled.input.attrs({ type: 'checkbox' })<{ checkboxColor: string }>`
border:50%;
color: black;
width: 1rem;
height: 1rem;
& + ${LabelText} {
    &:before,
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      height: 1em;
      width: 1em;
      content: '';
      display: block;
    }
    &:before {
      border-radius: 4px;
    }
    &:after {
      border-radius: 3px;
    }
  }
  & + ${LabelText}:before {
    box-shadow: black 0 0 0 1px inset;
  }
  &:focus + ${LabelText}:before {
    box-shadow: ${(props) => props.checkboxColor} 0 0 0 1px inset;
  }
  &:checked + ${LabelText}:before {
    box-shadow: ${(props) => props.checkboxColor} 0 0 0 1px inset;
  }
  
  & + ${LabelText}:after {
    transition: all 150ms ease-out;
    transform: scale3d(0, 0, 1);
    height: 10px;
    margin-left: 2px;
    margin-top: 2px;
    width: 10px;
    opacity: 0;
  }
  &:checked + ${LabelText}:after {
    transform: scale3d(1, 1, 1);
    background: ${(props) => props.checkboxColor};
    opacity: 1;
  }

`

export const OptionalText = styled.span<{ hideLabel: boolean }>`
  ${(props) =>
    props.hideLabel &&
    `
      border: 0px !important;
      clip: rect(0 0 0 0) !important;
      -webkit-clip-path: inset(100%) !important;
      clip-path: inset(100%) !important;
      height: 1px !important;
      overflow: hidden !important;
      padding: 0px !important;
      position: absolute !important;
      white-space: nowrap !important;
      width: 1px !important;
    `}

`
export const Error = styled.div`
  color:black;
  margin-left: 6px;
  height: 1em;
  display: flex;
  align-items: center;
`