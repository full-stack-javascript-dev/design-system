export interface ResponsiveContainerBreakpoint {
  minWidth: number | string;
  width: number | string;
  contentPadding: number | string;
}

// TODO: Resolve default from Theme Provider?

export const defaultBreakpoints: ResponsiveContainerBreakpoint[] = [
  { width: "480px", minWidth: "480px", contentPadding: "20px" },
  { width: "768px", minWidth: "768px", contentPadding: "20px" },
  { width: "992px", minWidth: "992px", contentPadding: "20px" },
  { width: "1200px", minWidth: "1200px", contentPadding: "0px" }
];
