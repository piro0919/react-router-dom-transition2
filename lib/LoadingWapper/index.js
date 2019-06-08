"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var LoadingWrapper = function (_a) {
    var children = _a.children, _b = _a.container, container = _b === void 0 ? document.getElementById("root") : _b, location = _a.location, transitionTime = _a.transitionTime;
    // TODO: locationが存在しないケースがある？
    var pathname = location.pathname;
    var _c = React.useState(pathname), prevPathName = _c[0], setPrevPathName = _c[1];
    var _d = React.useState(null), currentLoadingPortal = _d[0], setCurrentLoadingPortal = _d[1];
    var ref = React.useRef({
        canShowLoading: false
    });
    var loadingPortal = React.useMemo(function () { return ReactDOM.createPortal(children, container); }, [children, container]);
    React.useEffect(function () {
        var canShowLoading = ref.current.canShowLoading;
        // 初回はローディング画面を表示しない
        if (!canShowLoading) {
            return;
        }
        if (pathname === prevPathName) {
            setTimeout(function () {
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
    React.useEffect(function () {
        setPrevPathName(pathname);
    }, [pathname, setPrevPathName]);
    React.useEffect(function () {
        ref.current.canShowLoading = true;
    }, [ref]);
    return currentLoadingPortal;
};
exports.default = LoadingWrapper;
