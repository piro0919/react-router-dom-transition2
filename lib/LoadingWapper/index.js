"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var LoadingWrapper = function (_a) {
    var children = _a.children, _b = _a.container, container = _b === void 0 ? document.getElementById("root") : _b, location = _a.location, transitionTime = _a.transitionTime;
    // TODO: locationが存在しないケースがある？
    var pathname = location.pathname;
    var _c = react_1.default.useState(pathname), prevPathName = _c[0], setPrevPathName = _c[1];
    var _d = react_1.default.useState(null), currentLoadingPortal = _d[0], setCurrentLoadingPortal = _d[1];
    var ref = react_1.default.useRef({
        canShowLoading: false
    });
    var loadingPortal = react_1.default.useMemo(function () { return react_dom_1.default.createPortal(children, container); }, [children, container]);
    react_1.default.useEffect(function () {
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
    react_1.default.useEffect(function () {
        setPrevPathName(pathname);
    }, [pathname, setPrevPathName]);
    react_1.default.useEffect(function () {
        ref.current.canShowLoading = true;
    }, [ref]);
    return currentLoadingPortal;
};
exports.default = LoadingWrapper;
