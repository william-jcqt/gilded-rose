var Item = /** @class */ (function () {
    function Item(name, quality, sellIn) {
        this._name = name;
        this._quality = quality;
        this._sellIn = sellIn;
    }
    Item.prototype.decreaseSellIn = function () {
        if (this.sellIn > 0)
            this.sellIn--;
    };
    Item.prototype.updateQuality = function (quality) {
        if (quality > Item.MAX_QUALITY || quality < Item.MIN_QUALITY) {
            return;
        }
        this.quality = quality;
    };
    Item.prototype.update = function () {
        this.updateQuality(this.computeQuality());
        this.decreaseSellIn();
    };
    Object.defineProperty(Item.prototype, "name", {
        // {
        //     let nextQuality: number = this.quality;
        //     switch (this.name) {
        //         case "Aged Brie":
        //             if(this.quality < 49) nextQuality++;
        //             break;
        //         case "Backstage passes":
        //             if (this.sellIn == 0) {
        //                 nextQuality = 0;
        //                 break;
        //             }
        //             if (this.sellIn < 5) {
        //                 nextQuality += 3;
        //                 break;
        //             }
        //             if (this.sellIn < 10) {
        //                 nextQuality += 2;
        //                 break;
        //             }
        //             nextQuality++;
        //             break;
        //         case "Sulfuras":
        //             return;
        //         default:
        //             if (this.sellIn > 0) {
        //                 nextQuality--;
        //             } else {
        //                 nextQuality -= 2;
        //             }
        //     }
        //     this.decreaseSellIn();
        //     if (nextQuality > 50 || nextQuality < 0) {
        //         return;
        //     }
        //     this.quality = nextQuality;
        // }
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "quality", {
        get: function () {
            return this._quality;
        },
        set: function (value) {
            this._quality = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "sellIn", {
        get: function () {
            return this._sellIn;
        },
        set: function (value) {
            this._sellIn = value;
        },
        enumerable: false,
        configurable: true
    });
    Item.MAX_QUALITY = 50;
    Item.MIN_QUALITY = 0;
    return Item;
}());
export default Item;
