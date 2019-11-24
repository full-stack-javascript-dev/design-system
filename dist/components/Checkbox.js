import React from "react";
import styled, { css } from "styled-components";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdIndeterminateCheckBox } from "react-icons/md";
export let CheckState;

(function (CheckState) {
  CheckState["NotSet"] = "NotSet";
  CheckState["UnChecked"] = "UnChecked";
  CheckState["Checked"] = "Checked";
})(CheckState || (CheckState = {}));

const nextTriStateMap = {
  [CheckState.NotSet]: CheckState.Checked,
  [CheckState.Checked]: CheckState.UnChecked,
  [CheckState.UnChecked]: CheckState.NotSet
};
export const CheckBox = ({
  label = undefined,
  checkState,
  triState,
  onCheckStateChange
}) => {
  const handleClick = () => {
    if (triState) {
      onCheckStateChange(nextTriStateMap[checkState]);
    } else {
      onCheckStateChange(checkState === CheckState.Checked ? CheckState.UnChecked : CheckState.Checked);
    }
  };

  return React.createElement(CheckBoxStyled, {
    checkState: checkState,
    onClick: handleClick
  }, checkState === CheckState.Checked && React.createElement(MdCheckBox, null), checkState === CheckState.NotSet && React.createElement(MdIndeterminateCheckBox, null), checkState === CheckState.UnChecked && React.createElement(MdCheckBoxOutlineBlank, null), label && React.createElement("span", null, label));
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

  ${props => props.checkState === CheckState.NotSet && css`
      color: #999;

      > svg {
        color: #999;
        &:hover {
          color: #555;
        }
      }
    `};

  ${props => props.checkState === CheckState.UnChecked && css`
      > svg {
        color: #999;
      }
    `};
  ${props => props.checkState === CheckState.Checked && css`
      > svg {
        color: green;
      }
    `};
`;