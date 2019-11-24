import React from "react";
import { ResponsiveContainerBreakpoint } from "../components/responsiveBreakpoints";
interface LayoutContentColumnsConfig {
    breakpoints: ResponsiveContainerBreakpoint[];
}
interface LayoutContentColumnsConfigProps extends React.HTMLAttributes<HTMLDivElement> {
    gridTemplateColumns?: string;
    config?: LayoutContentColumnsConfig;
}
export declare const LayoutContentColumns: React.FC<LayoutContentColumnsConfigProps>;
export declare const LayoutContentColumn: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=LayoutContentColumns.d.ts.map