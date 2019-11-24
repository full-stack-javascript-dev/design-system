import React from "react";
export declare enum CheckState {
    NotSet = "NotSet",
    UnChecked = "UnChecked",
    Checked = "Checked"
}
interface StyledCheckBoxProps extends React.InputHTMLAttributes<any> {
    label?: string;
    checkState: CheckState;
    triState?: boolean;
}
interface CheckBoxProps extends StyledCheckBoxProps {
    onCheckStateChange: (nextState: CheckState) => void;
}
export declare const CheckBox: React.FC<CheckBoxProps>;
export {};
//# sourceMappingURL=Checkbox.d.ts.map