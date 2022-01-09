import { expect } from 'chai';
import Shop from "../src/Models/Shop";
import InMemoryRepo from "../src/Models/Repository/InMemoryRepository";
import { ItemType, RawItem } from "../src/Types/Item";

describe("legendaryItems test", () => {
    let shop: Shop;
    before(() => {
        const inMemoryRepo = new InMemoryRepo();
        shop = new Shop(inMemoryRepo);
        const rawItem: RawItem = {
            name: "master sword",
            quality: 50,
            sellIn: 0,
            type: ItemType.LEGENDARY
        };
        shop.createItem(rawItem);
    });
    it("should keep his quality over time", () => { 
        expect(shop.getInventory()[0].quality).to.be.equal(50, "test start wrong.");
        shop.updateInventory();
        expect(shop.getInventory()[0].quality).to.be.equal(50, "must be 2");
    });
});