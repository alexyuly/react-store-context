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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQVkvQixNQUFNLFVBQVUsV0FBVyxDQUFJLFlBQXNCO0lBQXRCLDZCQUFBLEVBQUEsZUFBZSxFQUFPO0lBQzdDLElBQUEsOEJBQWtELEVBQWhELHNCQUFRLEVBQUUsc0JBQXNDLENBQUM7SUFDekQsT0FBTztRQUNMLFFBQVEsVUFBQTtRQUNSLFFBQVE7WUFBZ0IsMkJBQWU7WUFDckMsaUJBQVksS0FBSztnQkFBakIsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FFYjtnQkFEQyxLQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQzs7WUFDNUIsQ0FBQztZQUNELHdCQUFNLEdBQU47Z0JBQ0UsT0FBTyxDQUNMLG9CQUFDLFFBQVEsSUFDUCxLQUFLLEVBQUU7d0JBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUNuQyxJQUVBLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNYLENBQ1osQ0FBQztZQUNKLENBQUM7WUFDSCxjQUFDO1FBQUQsQ0FBQyxBQWpCUyxDQUFjLEtBQUssQ0FBQyxTQUFTLEVBaUJ0QztLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIFN0b3JlQXR0cmlidXRlczxUPiA9IHtcbiAgc3RhdGU6IFQ7XG4gIHNldFN0YXRlOiAodXBkYXRlOiBQYXJ0aWFsPFQ+KSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBTdG9yZTxUPiB7XG4gIENvbnN1bWVyOiBSZWFjdC5Db21wb25lbnRUeXBlPFJlYWN0LkNvbnN1bWVyUHJvcHM8U3RvcmVBdHRyaWJ1dGVzPFQ+Pj47XG4gIFByb3ZpZGVyOiBSZWFjdC5Db21wb25lbnRUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmU8VD4oaW5pdGlhbFN0YXRlID0ge30gYXMgVCk6IFN0b3JlPFQ+IHtcbiAgY29uc3QgeyBDb25zdW1lciwgUHJvdmlkZXIgfSA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG4gIHJldHVybiB7XG4gICAgQ29uc3VtZXIsXG4gICAgUHJvdmlkZXI6IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgICBzZXRTdGF0ZTogdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG4iXX0=