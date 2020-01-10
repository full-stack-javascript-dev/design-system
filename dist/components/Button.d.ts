import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<any> {
    size?: 'small' | 'medium' | 'large';
    block?: boolean;
    children?: any;
}
export declare const Button: React.FC<ButtonProps>;
export declare const ButtonLink: React.FC<ButtonProps>;
interface ButtonGroupProps extends React.HTMLAttributes<any> {
    children: any;
}
export declare const ButtonGroup: React.FC<ButtonGroupProps>;
export {};
//# sourceMappingURL=Button.d.ts.map