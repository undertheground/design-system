import React, { FunctionComponent,useState } from 'react';
import styled from 'styled-components';
// import colors from '@undertheground/color';

interface dropDownItem {
  text: string;
  value: string;
}

export type DropdownProps = {
  id?: string;
  items?: Array<dropDownItem>;
  onChange?: React.ChangeEvent<HTMLSelectElement>;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
};

const Main = styled("div")`

`;

const DropDownContainer = styled("div")`

`;

const DropDownHeader = styled("div")`

`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`

`;

const ListItem = styled("li")`
  list-style: none;
`;


export function Dropdown(props:DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionValue, setSelectedOptionValue] = useState("");
  const [selectedOptionText, setSelectedOptionText] = useState("");

  const toggling = () => {if(!props.disabled) setIsOpen(!isOpen)};

  const onOptionClicked =(value:string,text:string) => {
    setSelectedOptionValue(value);
    setSelectedOptionText(text);
    setIsOpen(false);
    console.log(selectedOptionValue);
  };

  return (
    <Main>
      <h1>{props.label}</h1>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOptionText || props.placeholder}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {props.items && props.items.map(option => (
                <ListItem onClick={()=>{onOptionClicked(option.value,option.text)}}  key={Math.random()}>
                  {option.text}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}