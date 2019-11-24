import React from "react";
interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    fillwidth?: boolean;
    children: any;
}
export declare const Table: React.FC<TableProps>;
interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children: any;
    centralize?: boolean;
}
export declare const Tr: React.FC<TrProps>;
interface ThProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
    children?: any;
    offsetCell?: boolean;
}
export declare const Th: React.FC<ThProps>;
interface TdProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
    children?: any;
    offsetCell?: boolean;
}
export declare const Td: React.FC<TdProps>;
export declare const TableHeaderControls: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Table.d.ts.map