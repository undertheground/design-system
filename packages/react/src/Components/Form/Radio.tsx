import React , { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import colors from '@undertheground/color';


interface RadioProps {
    id: string;
    value?: string;
    label: string;
    hideLabel?: boolean;
    description?: string;
    error?: ReactNode;
    className?: string;
  }


export const Radio: FunctionComponent<RadioProps> = ({
    id,
    label,
    description,
    error,
    hideLabel = false,
    value = '',
    className,
    ...props
  }) => {
    let errorId;
    let descriptionId;
    let ariaDescribedBy;
  
    if (error) {
      errorId = `${id}-error`;
      ariaDescribedBy = errorId;
    }
    if (description) {
      descriptionId = `${id}-description`;
      ariaDescribedBy = `${ariaDescribedBy} ${descriptionId}`;
    }
  
    return (
      <StyledLabel htmlFor={id}>
        <input
          id={id}
          type="radio"
          value={value}
          {...props}
        />
        <svg width="20px" height="20px" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="9"></circle>
          <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className={'inner'}></path>
          <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className={'outer'}></path>
        </svg>
        <span>Option One</span>

      </StyledLabel>
    );
};

const StyledLabel = styled.label`
cursor: pointer;
display: inline-block;
-webkit-user-select: none;
user-select: none;

  
svg {
  fill: none;
  vertical-align: middle;
  circle {
    stroke-width: 2;
    stroke: ${colors.grey[3]};
  }
  path {
    stroke: ${colors.blue[3]};
    &.inner {
      stroke-width: 6;
      stroke-dasharray: 19;
      stroke-dashoffset: 19;
    
    }
    &.outer {
      stroke-width: 2;
      stroke-dasharray: 57;
      stroke-dashoffset: 57;
    }
  }
}
  
input {
  display: none;
  &:checked + svg{
    path{
      transition: all .2s ease;
      &.inner {
        stroke-dashoffset: 38;
        transition-delay: .1s;
      }
      &.outer {
        stroke-dashoffset: 0;
      }
    }
  }
}

span {
  display: inline-block;
  vertical-align: middle;
}
`;

