import React, { ReactChild } from 'react';
import styled from 'styled-components';

interface AvatarFunctionalProps {
  id?: string;
  children?: ReactChild | ReactChild[];
  size?: 'S' | 'M' | 'L' | 'XL';
  shape?: 'round' | 'square';
}
interface AvataraestheticProps {}
export type AvatarProps = AvatarFunctionalProps & AvataraestheticProps;
interface StyledAvatarProps {
  size: number;
  shape?: 'round' | 'square';
  fontSize: number;
}

export function Avatar(props: AvatarProps) {
  const sizeDefinition = { S: 1.5, M: 2, L: 2.5, XL: 4 };
  const FontsizeDefinition = { S: 12, M: 14.4, L: 19.2, XL: 25.6 };
  return (
    <StyledAvatar
      id={props.id}
      size={props.size ? sizeDefinition[props.size] : 2.5} //we must have a defult size
      shape={props.shape}
      fontSize={props.size ? FontsizeDefinition[props.size] : 19.2}
    >
      {props.children}
    </StyledAvatar>
  );
}

const StyledAvatar = styled.div<StyledAvatarProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  line-height: ${(props) => props.size + 'rem'};
  font-size: ${(props) => props.fontSize + `px`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #1d62d1;
  width: ${(props) => props.size + 'rem'};
  height: ${(props) => props.size + 'rem'};
  border-radius: ${(props) =>
    props.shape === 'round' ? props.size / 2 + `rem` : `2px`};
`;
