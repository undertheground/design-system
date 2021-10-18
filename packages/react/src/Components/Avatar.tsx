import React, { ReactChild } from 'react';
import styled from 'styled-components';

export interface AvatarProps {
  id?: string;
  children?: ReactChild | ReactChild[];
  size?: 'S' | 'M' | 'L' | 'XL';
}

interface StyledAvatarProps {
  size?: number;
}

export function Avatar(props: AvatarProps) {
  const sizeDefinition = { S: 24, M: 32, L: 40, XL: 64 };
  return (
    <StyledAvatar
      id={props.id}
      size={props.size ? sizeDefinition[props.size] : undefined}
    >
      {props.children}
    </StyledAvatar>
  );
}

const StyledAvatar = styled.div<StyledAvatarProps>``;
