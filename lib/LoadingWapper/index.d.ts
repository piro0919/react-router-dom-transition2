import * as React from "react";
import { SwitchProps } from "react-router-dom";
export interface LoadingWrapperProps extends Pick<SwitchProps, "location"> {
    children?: React.ReactNode;
    container?: Element;
    transitionTime?: number;
}
declare const LoadingWrapper: React.FC<LoadingWrapperProps>;
export default LoadingWrapper;
