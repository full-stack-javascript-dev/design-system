import React from "react";
import styled, { css } from "styled-components";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdIndeterminateCheckBox
} from "react-icons/md";

export enum CheckState {
  NotSet = "NotSet",
  UnChecked = "UnChecked",
  Checked = "Checked"
}

interface StyledCheckBoxProps extends React.InputHTMLAttributes<any> {
  label?: string;
  checkState: CheckState;
  triState?: boolean;
}

interface CheckBoxProps extends StyledCheckBoxProps {
  onCheckStateChange: (nextState: CheckState) => void;
}

const nextTriStateMap = {
  [CheckState.NotSet]: CheckState.Checked,
  [CheckState.Checked]: CheckState.UnChecked,
  [CheckState.UnChecked]: CheckState.NotSet
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  label = undefined,
  checkState,
  triState,
  onCheckStateChange
}) => {
  const handleClick = () => {
    if (triState) {
      onCheckStateChange(nextTriStateMap[checkState]);
    } else {
      onCheckStateChange(
        checkState === CheckState.Checked
          ? CheckState.UnChecked
          : CheckState.Checked
      );
    }
  };

  return (
    <CheckBoxStyled checkState={checkState} onClick={handleClick}>
      {checkState === CheckState.Checked && <MdCheckBox />}
      {checkState === CheckState.NotSet && <MdIndeterminateCheckBox />}
      {checkState === CheckState.UnChecked && <MdCheckBoxOutlineBlank />}
      {label && <span>{label}</span>}
    </CheckBoxStyled>
  );
};

const CheckBoxStyled = styled.div`
  display: inline-flex;
  cursor: pointer;
  margin: 4px;
  padding: 3px;

  > svg {
    margin-right: 5px;
    width: 20px;
    height: 20px;
    font-size: 0.8rem;
    align-items: center;
  }

  ${(props: StyledCheckBoxProps) =>
    props.checkState === CheckState.NotSet &&
    css`
      color: #999;

      > svg {
        color: #999;
        &:hover {
          color: #555;
        }
      }
    `};

  ${(props: StyledCheckBoxProps) =>
    props.checkState === CheckState.UnChecked &&
    css`
      > svg {
        color: #999;
      }
    `};
  ${(props: StyledCheckBoxProps) =>
    props.checkState === CheckState.Checked &&
    css`
      > svg {
        color: green;
      }
    `};
`;
