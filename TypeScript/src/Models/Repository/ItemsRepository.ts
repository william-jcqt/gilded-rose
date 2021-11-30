import { RawItem } from "../../Types/Item";
import Item from "../Item";

export default interface ItemsRepository {
    getInventory(): Array<RawItem>;
    saveInventory(inventory: Array<RawItem>): Array<RawItem>;
}