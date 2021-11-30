import Item from "./Item";

export default class AgedItem extends Item {
    protected computeQuality() {
        if (this.quality < Item.MAX_QUALITY) {
            return this.quality++;
        }
        return this.quality;
    }
}