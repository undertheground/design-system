import React from 'react';
import styled from 'styled-components';

// export interface DividerProps {}

export function Divider() {
  return <StyledDivider/>;
}

const StyledDivider = styled.div`
  width: 222px;
  height: 0px;
  border: 1px solid #e8e8e8;
  width: calc(100% - 2rem);
  margin: 2.5rem 1rem;
`;
