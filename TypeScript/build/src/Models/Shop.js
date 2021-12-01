import { ItemType } from "../Types/Item";
import AgedItem from "./AgedItem";
import BasicItem from "./BasicItem";
import LegendaryItem from "./LegendaryItem";
import LimitedItem from "./LimitedItem";
var Shop = /** @class */ (function () {
    function Shop(repository) {
        this._repository = repository;
    }
    Shop.prototype.updateInventory = function () {
        var items = this.rawToClass(this._repository.getInventory());
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            item.update();
        }
        this._repository.saveInventory(this.classToRaw(items));
    };
    Shop.prototype.rawToClass = function (rawInventory) {
        return rawInventory.map(function (rawItem) {
            switch (rawItem.type) {
                case ItemType.AGED:
                    return new AgedItem(rawItem.name, rawItem.quality, rawItem.sellIn);
                case ItemType.LIMITED:
                    return new LimitedItem(rawItem.name, rawItem.quality, rawItem.sellIn);
                case ItemType.LEGENDARY:
                    return new LegendaryItem(rawItem.name, rawItem.quality, rawItem.sellIn);
                default:
                    return new BasicItem(rawItem.name, rawItem.quality, rawItem.sellIn);
            }
        });
    };
    Shop.prototype.classToRaw = function (inventory) {
        return inventory.map(function (item) {
            var type;
            switch (item.constructor) {
                case AgedItem:
                    type = ItemType.AGED;
                    break;
                case LimitedItem:
                    type = ItemType.LIMITED;
                    break;
                case LegendaryItem:
                    type = ItemType.LEGENDARY;
                    break;
                default:
                    type = ItemType.BASIC;
                    break;
            }
            return {
                name: item.name,
                type: type,
                quality: item.quality,
                sellIn: item.sellIn,
            };
        });
    };
    return Shop;
}());
export default Shop;
