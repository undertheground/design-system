import React, { useState } from 'react';
import styled from 'styled-components';
// import colors from '@undertheground/color';

interface dropDownItem {
  text: string;
  value: string;
}

interface selectProps {
  isOpen: boolean;
  disabled?: boolean;
}
interface optionsProps {
  selected?: boolean;
}

export type DropdownProps = {
  id?: string;
  items?: Array<dropDownItem>;
  onChange?: React.ChangeEvent<HTMLSelectElement>;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
};

export function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionValue, setSelectedOptionValue] = useState('');
  const [selectedOptionText, setSelectedOptionText] = useState('');

  const toggling = () => {
    if (!props.disabled) setIsOpen(!isOpen);
  };

  const onOptionClicked = (value: string, text: string) => {
    setSelectedOptionValue(value);
    setSelectedOptionText(text);
    setIsOpen(false);
    console.log(selectedOptionValue);
  };

  return (
    <Main>
      <Label color={props.disabled ? '#BABABA' : '#303030'}>
        {props.label}
      </Label>
      <DropDownContainer>
        <DropDownHeader
          isOpen={isOpen}
          disabled={props.disabled}
          onClick={toggling}
        >
          {selectedOptionText || props.placeholder}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {props.items &&
                props.items.map((option) => (
                  <ListItem
                    selected={option.value === selectedOptionValue}
                    onClick={() => {
                      onOptionClicked(option.value, option.text);
                    }}
                    key={Math.random()}
                  >
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

const Main = styled('div')``;

const DropDownContainer = styled('div')``;

const DropDownHeader = styled.div<selectProps>`
  padding: 23px 18px;
  background: ${(props) => (props.disabled ? '#F4F4F4' : '#ffffff')};
  border: 1px solid ${(props) => (props.isOpen ? '#1D62D1' : '#bababa')};
  box-sizing: border-box;
  border-radius: ${(props) => (props.isOpen ? '2px 2px 0px 0px' : '2px')};
  ${(props) => props.isOpen && 'border-bottom: none;'}
  font-style: normal;
  font-family: 'Mukta Vaani';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${(props) => (props.disabled ? '#BABABA' : '#303030')};
  &:focus {
    border: 1px solid #1d62d1;
  }
`;

const DropDownListContainer = styled('div')`
  background: #ffffff;
  border: 1px solid #1d62d1;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 2px 2px;
`;

const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
`;
const ListItem = styled('li')<optionsProps>`
  background: ${(props) => (props.selected ? '#F4F4F4' : '#ffffff')};
  padding: 18px;
  list-style: none;
  border-top: 1px solid #1d62d1;
  font-family: 'Mukta';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #303030;
  &:first-child {
    border-top: none;
  }
`;

const Label = styled('h3')`
  font-family: 'Mukta Vaani';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${(props) => props.color};
`;
