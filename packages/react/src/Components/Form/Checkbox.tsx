import React , { ComponentProps, FunctionComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import colors from '@undertheground/color';
import { rgba } from 'polished';



export type CheckBoxProps = {
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
  const checkboxColor = colors.pink[3];
  return (
    <CheckboxWrapper>
      <Label>
        <Input
          {...props}
          id={id}
          checkboxColor={checkboxColor}
          type="checkbox"
        />
         
        <LabelText>
          <OptionalText hideLabel={hideLabel}>{label}</OptionalText>
        </LabelText>
      </Label>
      <Error id={errorId}>{error}</Error>
    </CheckboxWrapper>
  );
};



const Label = styled.label`
  cursor: pointer;
  font-size: 16px;
  position: relative;
  height: 1rem;
  display: flex;
  align-items: center;
`;

const OptionalText = styled.span<Pick<CheckBoxProps, "hideLabel">>`
  ${(props) =>
    props.hideLabel &&
    css`
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
`;

const Error = styled.span`

  color: ${colors.pink[3]};
  margin-left: 6px;
  height: 1rem;
  display: flex;
  align-items: center;
`;

const LabelText = styled.span``;

const Input = styled.input.attrs({ type: 'checkbox' })<{ checkboxColor: string }>`
  margin: 0 0.4rem 0 0;
  font-size: initial;
  opacity: 0;
  vertical-align: text-top;
  & + ${LabelText} {
    &:before,
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      height: 1rem;
      width: 1rem;
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
    box-shadow: ${colors.pink[3]} 0 0 0 1px inset;
  }
  &:focus + ${LabelText}:before {
    box-shadow: ${(props) => props.checkboxColor} 0 0 0 1px inset;

  }
  &:checked + ${LabelText}:before {
    box-shadow: ${(props) => props.checkboxColor} 0 0 0 1px inset;
  }
  
  &:checked:focus + ${LabelText}:before {
    box-shadow: ${(props) => props.checkboxColor} 0 0 0 1px inset,
      ${(props) => rgba(props.checkboxColor, 0.3)} 0 0 5px 2px;
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
    background: ${colors.pink[3]};
    opacity: 1;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;