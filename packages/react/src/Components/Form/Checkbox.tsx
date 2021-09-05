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

`

export const Label = styled.div`

`

export const Input = styled.div`

`

export const LabelText = styled.div`

`
export const OptionalText = styled.span<{ hideLabel: boolean }>`

`
export const Error = styled.div`

`