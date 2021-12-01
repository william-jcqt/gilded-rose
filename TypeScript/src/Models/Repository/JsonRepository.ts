import { RawItem } from "../../Types/Item";
import ItemsRepository from "./ItemsRepository";
import fs from "fs";

export default class JsonRepository implements ItemsRepository {

    getInventory(): RawItem[] {
        return JSON.parse(fs.readFileSync("inventory.json", "utf8"));
    }

    saveInventory(inventory: RawItem[]): RawItem[] {
        fs.writeFile('inventory.json', JSON.stringify(inventory), function (err) {
            if (err) {
                return console.error(err);
            }
            console.debug("File created!");
        });
        return inventory;
    }

}