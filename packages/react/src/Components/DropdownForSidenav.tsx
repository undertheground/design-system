import React, { ReactChild } from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  placeholder?: string;
  children?: ReactChild | ReactChild[];
}

export function DropdownForSidenav(props: DropdownProps) {
  return (
    <DropDownContainer>
      <DropDownHeader>{props.placeholder}<ExpandIcon/></DropDownHeader>
      <DropDownItemsContainer>{props.children}</DropDownItemsContainer>
    </DropDownContainer>
  );
}

function ExpandIcon() {
  return (
    <div style={{color:'red'}}>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Icons"
        rel="stylesheet"
      />
      <span className={'material-icons'}>expand_more</span>
    </div>
  );
}

const DropDownContainer = styled.div`
  width: 254px;
`;
const DropDownItemsContainer = styled.div`
  padding-left: 1rem;
  padding-top: 5px;
`;
const DropDownHeader = styled.header`
  padding: 0.625rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Mukta Vaani';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  cursor: pointer;
`;
