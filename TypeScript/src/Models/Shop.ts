import { ItemType, RawItem } from "../Types/Item";
import AgedItem from "./AgedItem";
import BasicItem from "./BasicItem";
import Item from "./Item";
import LegendaryItem from "./LegendaryItem";
import LimitedItem from "./LimitedItem";
import ItemsRepository from "./Repository/ItemsRepository";

export default class Shop {
    private _repository: ItemsRepository;

    constructor(repository: ItemsRepository) {
        this._repository = repository
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
                    return new AgedItem(rawItem.name, rawItem.quality, rawItem.sellIn);
                case ItemType.LIMITED:
                    return new LimitedItem(rawItem.name, rawItem.quality, rawItem.sellIn);
                case ItemType.LEGENDARY:
                    return new LegendaryItem(rawItem.name, rawItem.quality, rawItem.sellIn);
                default:
                    return new BasicItem(rawItem.name, rawItem.quality, rawItem.sellIn);
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
            }
        });
    }
}