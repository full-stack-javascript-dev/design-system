import React from "react";
import styled, { css } from "styled-components";
const cellCss = css`
  padding: 12px 16px;
`;
const TableStyled = styled.table`
  border-collapse: collapse;
  ${props => props.fillwidth && css`
      width: 100%;
    `}
`;
export const Table = ({
  children,
  ...restProps
}) => {
  return React.createElement(TableStyled, restProps, React.createElement("tbody", null, children));
};
const TrStyled = styled.tr`
  td,
  th {
    vertical-align: top;
  }
  ${props => props.centralize && css`
      td,
      th {
        vertical-align: middle;
      }
    `}
`;
export const Tr = ({
  children,
  ...restProps
}) => {
  return React.createElement(TrStyled, restProps, children);
};
const ThStyled = styled.th`
  text-align: left;
  border-bottom: solid 1px #ccc;
  background-color: rgb(253, 254, 255);
  ${cellCss}
  ${props => props.offsetCell && css`
      padding-left: 30px;
    `}
`;
export const Th = ({
  children,
  ...restProps
}) => {
  return React.createElement(ThStyled, restProps, children);
};
const TdStyled = styled.td`
  text-align: left;
  ${cellCss}
  ${props => props.offsetCell && css`
      padding-left: 30px;
    `}
`;
export const Td = ({
  children,
  ...restProps
}) => {
  return React.createElement(TdStyled, restProps, children);
};
const TableHeaderControlsStyled = styled.div`
  display: flex;
  padding: 6px 8px;
`;
export const TableHeaderControls = ({
  children,
  ...restProps
}) => {
  return React.createElement(TableHeaderControlsStyled, restProps, children);
};