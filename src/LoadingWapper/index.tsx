import React from "react";
import ReactDOM from "react-dom";
import { SwitchProps } from "react-router-dom";

export interface LoadingWrapperProps extends Pick<SwitchProps, "location"> {
  children?: React.ReactNode;
  container?: Element;
  transitionTime?: number;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  children,
  container = document.getElementById("root") as Element,
  location,
  transitionTime
}) => {
  // TODO: locationが存在しないケースがある？
  const { pathname } = location!;
  const [prevPathName, setPrevPathName] = React.useState<typeof pathname>(
    pathname
  );
  const [
    currentLoadingPortal,
    setCurrentLoadingPortal
  ] = React.useState<React.ReactPortal | null>(null);

  const ref = React.useRef<{
    canShowLoading: boolean;
  }>({
    canShowLoading: false
  });

  const loadingPortal = React.useMemo(
    () => ReactDOM.createPortal(children, container),
    [children, container]
  );

  React.useEffect(() => {
    const {
      current: { canShowLoading }
    } = ref;

    // 初回はローディング画面を表示しない
    if (!canShowLoading) {
      return;
    }

    if (pathname === prevPathName) {
      setTimeout(() => {
        setCurrentLoadingPortal(null);
      }, transitionTime);

      return;
    }

    setCurrentLoadingPortal(loadingPortal);
  }, [
    loadingPortal,
    pathname,
    prevPathName,
    ref,
    setCurrentLoadingPortal,
    transitionTime
  ]);
  React.useEffect(() => {
    setPrevPathName(pathname);
  }, [pathname, setPrevPathName]);
  React.useEffect(() => {
    ref.current.canShowLoading = true;
  }, [ref]);

  return currentLoadingPortal;
};

export default LoadingWrapper;
