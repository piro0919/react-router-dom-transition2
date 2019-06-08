"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
var LoadingWapper_1 = require("./LoadingWapper");
var Switch = function (_a) {
    var children = _a.children, _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.loading, loading = _c === void 0 ? null : _c, propsLocation = _a.location, _d = _a.transitionTime, transitionTime = _d === void 0 ? delay : _d;
    var _e = react_1["default"].useState(propsLocation), stateLocation = _e[0], setStateLocation = _e[1];
    var _f = react_1["default"].useState(false), canTransition = _f[0], setCanTransition = _f[1];
    var setLocationOnDelay = react_1["default"].useCallback(function (nextLocation) {
        if (!canTransition) {
            setStateLocation(nextLocation);
            return;
        }
        setTimeout(function () {
            setStateLocation(nextLocation);
        }, delay);
    }, [canTransition, delay, setStateLocation]);
    react_1["default"].useEffect(function () {
        setCanTransition(true);
    }, [setCanTransition]);
    return (<react_router_1.__RouterContext.Consumer>
      {function (context) {
        var location = propsLocation || context.location;
        var element;
        var match;
        setLocationOnDelay(location);
        react_1["default"].Children.forEach(children, function (child) {
            if (match == null && react_1["default"].isValidElement(child)) {
                element = child;
                var path = child.props.path || child.props.from;
                if (!stateLocation) {
                    return;
                }
                match = path
                    ? react_router_1.matchPath(stateLocation.pathname, __assign({}, child.props, { path: path }))
                    : context.match;
            }
        });
        return (<react_1["default"].Fragment>
            {match
            ? react_1["default"].cloneElement(element, {
                stateLocation: stateLocation,
                computedMatch: match
            })
            : null}
            <LoadingWapper_1.default location={location} transitionTime={transitionTime}>
              {loading}
            </LoadingWapper_1.default>
          </react_1["default"].Fragment>);
    }}
    </react_router_1.__RouterContext.Consumer>);
};
exports["default"] = Switch;
