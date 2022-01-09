import { RawItem } from "../../Types/Item";

export default interface ItemsRepository {
    getInventory(): Array<RawItem>;
    saveInventory(inventory: Array<RawItem>): Array<RawItem>;
}