import Items from "./Item";

export default class LegendaryItem extends Items {
    protected computeQuality() {
        return this.quality;
    }
  
}