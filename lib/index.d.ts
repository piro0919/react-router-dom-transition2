import * as React from "react";
import { SwitchProps as ReactRouterDomSwitchProps } from "react-router-dom";
import { LoadingWrapperProps } from "./LoadingWapper";
export interface SwitchProps extends ReactRouterDomSwitchProps, Pick<LoadingWrapperProps, "transitionTime"> {
    delay?: number;
    loading?: LoadingWrapperProps["children"];
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
