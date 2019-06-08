import React from "react";
import { matchPath, __RouterContext as RouterContext } from "react-router";
import { SwitchProps as ReactRouterDomSwitchProps } from "react-router-dom";
import LoadingWrapper, { LoadingWrapperProps } from "./LoadingWapper";

export interface SwitchProps
  extends ReactRouterDomSwitchProps,
    Pick<LoadingWrapperProps, "transitionTime"> {
  delay?: number;
  loading?: LoadingWrapperProps["children"];
}

const Switch: React.FC<SwitchProps> = ({
  children,
  delay = 0,
  loading = null,
  location: propsLocation,
  transitionTime = delay
}) => {
  const [stateLocation, setStateLocation] = React.useState(propsLocation);
  const [canTransition, setCanTransition] = React.useState(false);

  const setLocationOnDelay = React.useCallback<
    (nextLocation: typeof stateLocation) => void
  >(
    nextLocation => {
      if (!canTransition) {
        setStateLocation(nextLocation);

        return;
      }

      setTimeout(() => {
        setStateLocation(nextLocation);
      }, delay);
    },
    [canTransition, delay, setStateLocation]
  );

  React.useEffect(() => {
    setCanTransition(true);
  }, [setCanTransition]);

  return (
    <RouterContext.Consumer>
      {context => {
        const location = propsLocation || context.location;

        let element: any;
        let match: any;

        setLocationOnDelay(location);

        React.Children.forEach(children, child => {
          if (match == null && React.isValidElement(child)) {
            element = child;

            const path = child.props.path || child.props.from;

            if (!stateLocation) {
              return;
            }

            match = path
              ? matchPath(stateLocation.pathname, { ...child.props, path })
              : context.match;
          }
        });

        return (
          <React.Fragment>
            {match
              ? React.cloneElement(element, {
                  stateLocation,
                  computedMatch: match
                })
              : null}
            <LoadingWrapper location={location} transitionTime={transitionTime}>
              {loading}
            </LoadingWrapper>
          </React.Fragment>
        );
      }}
    </RouterContext.Consumer>
  );
};

export default Switch;
