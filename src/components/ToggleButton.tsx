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
interface ToggleButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  toggled: boolean;
  onClick: any;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  toggled,
  onClick
}) => {
  return <div onClick={onClick}>{toggled ? <ToggleOn /> : <ToggleOff />}</div>;
};
