import React from "react";
import styled from "styled-components";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
const ToggleOff = styled(FaRegCircle)`
  color: #777;
  font-size: 1.3rem;
  cursor: pointer;
`;
const ToggleOn = styled(FaCheckCircle)`
  color: green;
  font-size: 1.3rem;
  cursor: pointer;
`;
export const ToggleButton = ({
  toggled,
  onClick
}) => {
  return React.createElement("div", {
    onClick: onClick
  }, toggled ? React.createElement(ToggleOn, null) : React.createElement(ToggleOff, null));
};