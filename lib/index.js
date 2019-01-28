var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import * as React from 'react';
export function createStore(initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = React.createContext(null), Consumer = _a.Consumer, Provider = _a.Provider;
    return {
        Consumer: Consumer,
        Provider: /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(props) {
                var _this = _super.call(this, props) || this;
                _this.state = initialState;
                return _this;
            }
            class_1.prototype.render = function () {
                return (React.createElement(Provider, { value: {
                        state: this.state,
                        setState: this.setState.bind(this)
                    } }, this.props.children));
            };
            return class_1;
        }(React.Component))
    };
}
var Provider = /** @class */ (function (_super) {
    __extends(Provider, _super);
    function Provider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Provider.prototype.renderStores = function (stores) {
        if (stores.length === 0) {
            return this.props.children;
        }
        var nextStore = stores[0];
        return (React.createElement(nextStore.Provider, null, this.renderStores(stores.slice(1))));
    };
    Provider.prototype.render = function () {
        return this.renderStores(this.props.stores);
    };
    return Provider;
}(React.Component));
export { Provider };
// TODO - In future, we may need to optimize how props are passed down, to avoid over-rendering.
export function consumeStore(store) {
    return function (Component) { return function (props) {
        return (React.createElement(store.Consumer, null, function (storeProps) {
            return (React.createElement(Component, __assign({}, props, { store: storeProps })));
        }));
    }; };
}
//# sourceMappingURL=index.js.map