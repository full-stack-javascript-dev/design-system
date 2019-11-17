export interface ResponsiveContainerBreakpoint {
  minWidth: number | string;
  width: number | string;
}

// TODO: Resolve default from Theme Provider?

export const defaultBreakpoints: ResponsiveContainerBreakpoint[] = [
  { width: "480px", minWidth: "480px" },
  { width: "768px", minWidth: "768px" },
  { width: "992px", minWidth: "992px" },
  { width: "1200px", minWidth: "1200px" }
];
