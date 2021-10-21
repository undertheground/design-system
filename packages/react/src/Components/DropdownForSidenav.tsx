import React, { ReactChild, useState } from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  placeholder?: string;
  children?: ReactChild | ReactChild[];
}

interface IconProps{color?:string}

export function DropdownForSidenav(props: DropdownProps) {
  const [ShowContent, setShowContent] = useState(false);
  const toggleContent = () => setShowContent((content) => !content);
  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggleContent}>
        {props.placeholder}
        <ExpandIcon />
      </DropDownHeader>
      <DropDownItemsContainer>
        {ShowContent && props.children}
      </DropDownItemsContainer>
    </DropDownContainer>
  );
}

function ExpandIcon() {
  return (
    <ChevronIcon color={'#ED037C'}>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Icons"
        rel="stylesheet"
      />
      <span className={'material-icons'}>expand_more</span>
    </ChevronIcon>
  );
}

const DropDownContainer = styled.div`
  /* width: 254px; */
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
const ChevronIcon = styled.div<IconProps>`
  color : ${props=>props.color}
`