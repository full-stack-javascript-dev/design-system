function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
const StyledPageFooter = styled.div`
  display: flex;
  flex-shrink: 0;
  padding: 30px 0;
`;
export const PageFooter = ({
  children,
  ...restProps
}) => {
  return React.createElement(StyledPageFooter, _extends({
    "data-fsjsd-el": "PageFooter"
  }, restProps), children);
};
const StyledPageFooterIcon = styled.div`
  display: inline-block;
  margin-right: 20px;
  svg {
    color: white;
    font-size: 3rem;
    opacity: 0.4;
    &:hover {
      opacity: 1;
    }
  }
`;
export const PageFooterIcon = ({
  children
}) => React.createElement(StyledPageFooterIcon, null, children);
export const PageFooterIconGroup = ({
  children
}) => React.createElement(StyledPageFooterIcon, null, children);