import { RawItem } from "../../Types/Item";
import ItemsRepository from "./ItemsRepository";

export default class InMemoryRepository implements ItemsRepository {
    private inventory: Array<RawItem>;

    constructor() {
        this.inventory = [];
    }

    getInventory(): RawItem[] {
        return this.inventory;
    }
    saveInventory(inventory: RawItem[]): RawItem[] {
        this.inventory = inventory;
        return this.inventory; 
    }

}