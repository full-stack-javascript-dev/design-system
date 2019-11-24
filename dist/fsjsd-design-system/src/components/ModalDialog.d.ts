import React from "react";
export declare const BackgroundLayer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: any;
}
export declare const ModalHeader: React.FC<ModalHeaderProps>;
export declare const ModalContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
interface ModalDialogProps extends React.HTMLAttributes<HTMLDivElement> {
    onBackgroundClick?: () => void;
    children?: any;
}
export declare const ModalDialog: React.FC<ModalDialogProps>;
declare type Action = () => void;
interface IConfirmModal {
    title: string;
    message: string;
    onConfirmed: Action;
    children?: (showModal: Action) => void;
}
export declare const ConfirmModal: ({ onConfirmed, title, message, children }: IConfirmModal) => JSX.Element;
export {};
//# sourceMappingURL=ModalDialog.d.ts.map