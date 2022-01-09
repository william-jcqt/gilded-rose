import { expect } from 'chai';
import Shop from "../src/Models/Shop";
import InMemoryRepo from "../src/Models/Repository/InMemoryRepository";
import { ItemType, RawItem } from "../src/Types/Item";

describe("agedItems test", () => {
    let shop: Shop;
    before(() => {
        const inMemoryRepo = new InMemoryRepo();
        shop = new Shop(inMemoryRepo);
        const rawItem: RawItem = {
            name: "brie",
            quality: 3,
            sellIn: 1,
            type: ItemType.AGED
        };
        shop.createItem(rawItem);
    });
    it("should increment quality over time", () => { 
        expect(shop.getInventory()[0].quality).to.be.equal(3, "test start wrong.");
        shop.updateInventory();
        expect(shop.getInventory()[0].quality).to.be.equal(4, "must be 4");
        shop.updateInventory();
        expect(shop.getInventory()[0].quality).to.be.equal(5, "must be 5");
    });
});