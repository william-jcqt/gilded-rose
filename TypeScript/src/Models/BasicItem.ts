import Item from "./Item";

export default class BasicItem extends Item {
    constructor(name: string, quality: number, sellIn: number) {
        if (quality > Item.MAX_QUALITY || quality < Item.MIN_QUALITY) {
            throw new Error("quality must be between 0 and 50");
        }
        super(name, quality, sellIn);
    }

    protected computeQuality() {
        if (this.sellIn > 0) {
            return this.quality - 1;
        } else {
            return this.quality - 2;
        }
    }
}