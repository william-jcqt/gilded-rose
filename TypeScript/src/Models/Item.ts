export default abstract class Item {
    protected static readonly MAX_QUALITY: number = 50;
    protected static readonly MIN_QUALITY: number = 0;

    private _name: string;
    private _quality: number;
    private _sellIn: number;

    public constructor(name: string, quality: number, sellIn: number) {
        this._name = name;
        this._quality = quality;
        this._sellIn = sellIn;
    }

    private decreaseSellIn() {
        if (this.sellIn > 0) this.sellIn--;
    }

    protected updateQuality(quality: number): void {
        if (quality > Item.MAX_QUALITY || quality < Item.MIN_QUALITY) {
            return;
        }
        this.quality = quality;
    }

    protected abstract computeQuality(): number;

    public update() {
        this.updateQuality(this.computeQuality());
        this.decreaseSellIn();
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get quality(): number {
        return this._quality;
    }

    public set quality(value: number) {
        this._quality = value;
    }

    public get sellIn(): number {
        return this._sellIn;
    }

    public set sellIn(value: number) {
        this._sellIn = value;
    }
}