import Item from "./Item";

export default class LimitedItem extends Item {
    protected computeQuality() {
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
    }
}