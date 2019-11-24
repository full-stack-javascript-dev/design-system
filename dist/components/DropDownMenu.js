import React, { useState, useCallback } from "react";
import style from "styled-components";
const DropDownMenuAnchor = style.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border:solid 1px #ccc;
  outline: none;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) background-color;
  -webkit-tap-highlight-color: transparent;
  cursor:pointer;
  
  &:focus{
    background-color:#FFF;
    border: solid 1px #f3f3f3;
  }
  &:hover{
    border: solid 1px #aaa;
  }
`;
const DropDownMenuChoices = style.div`
  background-color:white;
  border-radius: 4px;
    border:solid 1px #ccc;
    position:absolute;
    z-index:10000;
`;
const DropDownMenuChoice = style.div`
  cursor:pointer;
  background-color:white;
  &:hover{
      background-color:#ddd;
  }
`;
export const DropDownMenu = ({
  items,
  selectedItem,
  renderMenuItem,
  renderSelectedItem,
  onSelected
}) => {
  //const [selected, setSelected] = useState(selectedItem);
  const [choicesVisible, setChoicesVisible] = useState(false);
  const toggleChoices = useCallback(() => {
    setChoicesVisible(prev => !prev);
  }, [setChoicesVisible]);
  const setSelectedItem = useCallback(item => {
    //setSelected(item);
    setChoicesVisible(false);
    onSelected(item);
  }, [setChoicesVisible]);
  return React.createElement("div", null, React.createElement(DropDownMenuAnchor, {
    onSelect: () => false,
    onClick: ev => toggleChoices()
  }, renderSelectedItem(selectedItem)), choicesVisible && React.createElement(DropDownMenuChoices, null, items.map((item, key) => React.createElement(DropDownMenuChoice, {
    key: key,
    onClick: ev => setSelectedItem(item)
  }, renderMenuItem(item, key)))));
};