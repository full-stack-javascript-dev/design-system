import React from "react";
interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
    children?: any;
    backgroundColor?: string;
    background?: string;
}
export declare const NavBar: React.FC<NavBarProps>;
export declare const NavBarLogo: React.FC<React.HTMLAttributes<HTMLElement>>;
export declare const NavBarMenu: React.FC<React.HTMLAttributes<HTMLElement>>;
export declare const NavBarMenuItem: React.FC<React.HTMLAttributes<HTMLElement>>;
/** Allows wrapping of NavBarMenuItem. This should be declared in your module with a const
 * OUTSIDE of your component before use in render/JSX
 */
export declare const NavBarMenuItemComponent: (component: React.ReactNode) => React.FunctionComponent<any>;
export {};
//# sourceMappingURL=NavBar.d.ts.map