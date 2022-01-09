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
var BasicItem = /** @class */ (function (_super) {
    __extends(BasicItem, _super);
    function BasicItem(name, quality, sellIn) {
        var _this = this;
        if (quality > Item.MAX_QUALITY || quality < Item.MIN_QUALITY) {
            throw new Error("quality must be between 0 and 50");
        }
        _this = _super.call(this, name, quality, sellIn) || this;
        return _this;
    }
    BasicItem.prototype.computeQuality = function () {
        if (this.sellIn > 0) {
            return this.quality - 1;
        }
        else {
            return this.quality - 2;
        }
    };
    return BasicItem;
}(Item));
export default BasicItem;
