import React from "react";
import { ResponsiveContainerBreakpoint } from "../components/responsiveBreakpoints";
interface ResponsiveContainerConfig {
    breakpoints: ResponsiveContainerBreakpoint[];
}
interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    centreContainer?: boolean;
    config?: ResponsiveContainerConfig;
}
export declare const ResponsiveContainer: React.FC<ResponsiveContainerProps>;
export {};
//# sourceMappingURL=ResponsiveContainer.d.ts.map