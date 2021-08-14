import React from 'react'
import PropTypes from 'prop-types';
import {MouseEvent, PropsWithChildren} from 'react'
import styled from 'styled-components';

export const StyledButton = styled.button`
padding: ${(props: PaddingCSS) => (props.size === SIZES.LARGE ? '1rem 4.86rem' : '0.8rem 2.2rem')};
border-radius:0.3rem;
color:#fff;
font-size:1rem;
font-family:'Arial';
cursor:pointer;
border:  ${(props: BorderLine) => (props.kind === KIND.GHOST ? '1rem solid #1C5BC2' : 'none')};
Background:#d1036f;
`;

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const KIND = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
}

type OnClickAdapter<E extends HTMLElement> = (event: MouseEvent<E>) => void

interface PaddingCSS{
  size: string;
}
interface BorderLine{
  
}

interface ButtonPropsWithoutChildren {
  kind: 'primary' | 'secondary' | 'ghost'
  size: 'small' | 'medium' | 'large'
  disabled?: boolean
  icon?: 'with-icon' | 'icon-only'  
  onClick(): OnClickAdapter<HTMLButtonElement>
}

export type ButtonProps = PropsWithChildren<ButtonPropsWithoutChildren>;

const buttonStyleProps = {
  kind: PropTypes.oneOf(Object.values(KIND)),
  size: PropTypes.oneOf(Object.values(SIZES)),
};

export const Button = (props: ButtonProps) => {
  const {
    kind,
    icon,
    size,
    disabled,
    children,
    ...restOfProps
  } = props;
        return (
        <StyledButton
          size={props.size}
          {...restOfProps}
        >
          {props.children}
        </StyledButton>
      );
}


Button.propTypes = {
      ...buttonStyleProps,
      children: PropTypes.node.isRequired,
};
 