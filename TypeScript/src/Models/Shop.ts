import { ItemType, RawItem } from "../Types/Item";
import AgedItem from "./Items/AgedItem";
import BasicItem from "./Items/BasicItem";
import Item from "./Items/Item";
import LegendaryItem from "./Items/LegendaryItem";
import LimitedItem from "./Items/LimitedItem";
import ItemsRepository from "./Repository/ItemsRepository";

export default class Shop {
    private _repository: ItemsRepository;
    private balance: number;

    constructor(repository: ItemsRepository, balance: number) {
        this._repository = repository
        this.balance = balance;
    }

    public createItem(rawItem: RawItem): void {
        let items = this.rawToClass(this._repository.getInventory());
        switch (rawItem.type) {
            case ItemType.AGED:
                items = [...items, new AgedItem(rawItem.name, rawItem.quality, rawItem.sellIn, rawItem.value)];
                break;
            case ItemType.LIMITED:
                items = [...items, new LimitedItem(rawItem.name, rawItem.quality, rawItem.sellIn, rawItem.value)];
                break;
            case ItemType.LEGENDARY:
                items = [...items, new LegendaryItem(rawItem.name, rawItem.quality, rawItem.sellIn, rawItem.value)];
                break;
            default:
                items = [...items, new BasicItem(rawItem.name, rawItem.quality, rawItem.sellIn, rawItem.value)];
        }
        this._repository.saveInventory(this.classToRaw(items));
    }

    public buyItem(itemName: string) {
        let inventory: Array<RawItem> = this.getInventory();
        const index = inventory.findIndex(({ name }) => name === itemName);
        this.balance = this.balance + inventory[index].value;
        inventory.splice(index, 1);
        this._repository.saveInventory(inventory);
    }

    public sellItem(item: RawItem) {
        this.balance = this.balance - item.value;
        const inventory = this.getInventory();
        inventory.push(item);
        this._repository.saveInventory(inventory);
    }

    public getInventory(): Array<RawItem> {
        return this._repository.getInventory();
    }

    public getInventoryByQuantity(): Array<RawItem> {
        // var map = arr.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {});
        return this._repository.getInventory();
    }

    public updateInventory() {
        const items = this.rawToClass(this._repository.getInventory());
        for (const item of items) {
            item.update();
        }
        this._repository.saveInventory(this.classToRaw(items));
    }

    public rawToClass(rawInventory: Array<RawItem>): Array<Item> {
        return rawInventory.map(rawItem => {
            switch (rawItem.type) {
                case ItemType.AGED:
                    return new AgedItem(rawItem.name, rawItem.quality, rawItem.sellIn, rawItem.value);
                case ItemType.LIMITED:
                    return new LimitedItem(rawItem.name, rawItem.quality, rawItem.sellIn, rawItem.value);
                case ItemType.LEGENDARY:
                    return new LegendaryItem(rawItem.name, rawItem.quality, rawItem.sellIn, rawItem.value);
                default:
                    return new BasicItem(rawItem.name, rawItem.quality, rawItem.sellIn, rawItem.value);
            }
        });
    }

    public classToRaw(inventory: Array<Item>): Array<RawItem> {
        return inventory.map(item => {
            let type: ItemType;
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
                value: item.value
            }
        });
    }
}