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
