import React , { ComponentProps, FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import colors from '@undertheground/color';


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
        <Label className="label-cbx">
          <Input
            className="invisible"
            id={id}
            aria-describedby={errorId}
            aria-invalid={!!error}
            type="checkbox"
            {...props}
          />
          <div className="checkbox">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
              <polyline points="4 11 8 15 16 6"></polyline>
            </svg>
          </div>
          <LabelText>
            <OptionalText hideLabel={props.hideLabel}>{props.label}</OptionalText>
          </LabelText>
        </Label>
        <Error id={errorId}>{error}</Error>
      </StyledCheckbox>
    );
  };


export const StyledCheckbox = styled.div`
user-select: none;
cursor: pointer;
margin-bottom: 0;

input:checked + .checkbox {
  border-color:${colors.pink[3]};
}
input:checked + .checkbox svg path {
  fill:${colors.pink[3]};
}
input:checked + .checkbox svg polyline {
  stroke-dashoffset: 0;
}
:hover .checkbox svg path {
  stroke-dashoffset: 0;
}
.checkbox {
  position: relative;
  top: 2px;
  float: left;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.pink[3]};
  border-radius: 3px;
}
.checkbox svg {
  position: absolute;
  top: -2px;
  left: -2px;
}
.label-cbx .checkbox svg path {
  fill: none;
  stroke:${colors.pink[3]};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 71px;
  stroke-dashoffset: 71px;
  transition: all 0.6s ease;
}
.label-cbx .checkbox svg polyline {
  fill: none;
  stroke: #FFF;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 18px;
  stroke-dashoffset: 18px;
  transition: all 0.3s ease;
}
.label-cbx > span {
  pointer-events: none;
  vertical-align: middle;
}


`

export const Label = styled.div`


`
export const LabelText = styled.div`

`

export const Input = styled.input.attrs({ type: 'checkbox' })<{ checkboxColor: string }>`

`

export const OptionalText = styled.span<{ hideLabel: boolean }>`

`
export const Error = styled.div`

`