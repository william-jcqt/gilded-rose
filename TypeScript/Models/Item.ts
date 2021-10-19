export default class Item {
    public name: string;
    public quality: number;
    public sellIn: number;

    public constructor(name: string, quality: number, sellIn: number) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }

    private decreaseSellIn() {
        if(this.sellIn > 0) this.sellIn--;
    }
    
    public updateQuality(): void {
        let nextQuality: number = this.quality;

        switch (this.name) {
            case "Aged Brie":
                if(this.quality < 49) nextQuality++;
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
                } else {
                    nextQuality -= 2;
                }
        }

        this.decreaseSellIn();

        if (nextQuality > 50 || nextQuality < 0) {
            return;
        }
        this.quality = nextQuality;
    }
}