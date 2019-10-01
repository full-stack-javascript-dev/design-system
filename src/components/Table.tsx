import React from "react";
import styled, { css } from "styled-components";

const cellCss = css`
  padding: 12px 16px;
`;

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  fillwidth?: boolean;
  children: any;
}

const TableStyled = styled.table`
  border-collapse: collapse;
  ${(props: TableProps) =>
    props.fillwidth &&
    css`
      width: 100%;
    `}
`;

export const Table: React.FC<TableProps> = ({ children, ...restProps }) => {
  return (
    <TableStyled {...restProps}>
      <tbody>{children}</tbody>
    </TableStyled>
  );
};

interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: any;
  centralize?: boolean;
}

const TrStyled = styled.tr`
  td,
  th {
    vertical-align: top;
  }
  ${(props: TrProps) =>
    props.centralize &&
    css`
      td,
      th {
        vertical-align: middle;
      }
    `}
`;

export const Tr: React.FC<TrProps> = ({ children, ...restProps }) => {
  return <TrStyled {...restProps}>{children}</TrStyled>;
};

interface ThProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  children?: any;
  offsetCell?: boolean;
}

const ThStyled = styled.th`
  text-align: left;
  border-bottom: solid 1px #ccc;
  background-color: rgb(253, 254, 255);
  ${cellCss}
  ${(props: ThProps) =>
    props.offsetCell &&
    css`
      padding-left: 30px;
    `}
`;

export const Th: React.FC<ThProps> = ({ children, ...restProps }) => {
  return <ThStyled {...restProps}>{children}</ThStyled>;
};

interface TdProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
  children?: any;
  offsetCell?: boolean;
}

const TdStyled = styled.td`
  text-align: left;
  ${cellCss}
  ${(props: TdProps) =>
    props.offsetCell &&
    css`
      padding-left: 30px;
    `}
`;

export const Td: React.FC<TdProps> = ({ children, ...restProps }) => {
  return <TdStyled {...restProps}>{children}</TdStyled>;
};

const TableHeaderControlsStyled = styled.div`
  display: flex;
  padding: 6px 8px;
`;

export const TableHeaderControls: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...restProps }) => {
  return (
    <TableHeaderControlsStyled {...restProps}>
      {children}
    </TableHeaderControlsStyled>
  );
};
