import React from 'react';
import styled from 'styled-components'


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
export const Thing = () => {
  return <div><Button>Hello</Button></div>;
};
