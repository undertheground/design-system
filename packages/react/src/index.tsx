import React, { FC, HTMLAttributes, ReactChild } from 'react';
import styled from 'styled-components'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: "white";
  color: "#38a2f3";

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return <div><Button></Button></div>;
};
