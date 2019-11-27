import React from "react";
interface FormWrapperProps extends React.HTMLAttributes<any> {
    children: any;
    overlay?: boolean;
    emphasis?: boolean;
}
export declare const FormWrapper: React.FC<FormWrapperProps>;
interface FormControlProps extends React.HTMLAttributes<any> {
    children: any;
    noOffsetBottom?: boolean;
}
export declare const FormControl: React.FC<FormControlProps>;
interface FormLabelProps extends React.HTMLAttributes<any> {
    children?: any;
}
/** Label for form element */
export declare const FormLabel: React.FC<FormLabelProps>;
interface FormElementProps extends React.HTMLAttributes<any> {
    children?: any;
}
export declare const FormElement: React.FC<FormElementProps>;
interface FormInlineProps extends React.HTMLAttributes<any> {
    children?: any;
}
export declare const FormInline: React.FC<FormInlineProps>;
export {};
//# sourceMappingURL=FormData.d.ts.map