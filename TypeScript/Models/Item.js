"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(name, quality, sellIn) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }
    Item.prototype.decreaseSellIn = function () {
        if (this.sellIn > 0)
            this.sellIn--;
    };
    Item.prototype.updateQuality = function () {
        var nextQuality = this.quality;
        switch (this.name) {
            case "Aged Brie":
                if (this.quality < 49)
                    nextQuality++;
                break;
            case "Backstage passes":
                if (this.sellIn == 0) {
                    nextQuality = 0;
                    break;
                }
                if (this.sellIn < 5) {
                    nextQuality += 3;
                    break;
                }
                if (this.sellIn < 10) {
                    nextQuality += 2;
                    break;
                }
                nextQuality++;
                break;
            case "Sulfuras":
                return;
            default:
                if (this.sellIn > 0) {
                    nextQuality--;
                }
                else {
                    nextQuality -= 2;
                }
        }
        this.decreaseSellIn();
        if (nextQuality > 50 || nextQuality < 0) {
            return;
        }
        this.quality = nextQuality;
    };
    return Item;
}());
exports.default = Item;
