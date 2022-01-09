var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Item from "./Item";
var LimitedItem = /** @class */ (function (_super) {
    __extends(LimitedItem, _super);
    function LimitedItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LimitedItem.prototype.computeQuality = function () {
        if (this.sellIn == 0) {
            return 0;
        }
        if (this.sellIn < 5) {
            return this.quality + 3;
        }
        if (this.sellIn < 10) {
            return this.quality + 2;
        }
        return this.quality + 1;
    };
    return LimitedItem;
}(Item));
export default LimitedItem;
