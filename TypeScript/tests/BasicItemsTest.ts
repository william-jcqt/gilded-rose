import { expect } from 'chai';
import Shop from "../src/Models/Shop";
import InMemoryRepo from "../src/Models/Repository/InMemoryRepository";
import { ItemType, RawItem } from "../src/Types/Item";

describe("basicItems test", () => {
    let shop: Shop;
    before(() => {
        const inMemoryRepo = new InMemoryRepo();
        shop = new Shop(inMemoryRepo);
        const rawItem: RawItem = {
            name: "grape",
            quality: 3,
            sellIn: 2,
            type: ItemType.BASIC
        };
        shop.createItem(rawItem);
    });
    it("should decrement quality over time", () => { 
        expect(shop.getInventory()[0].quality).to.be.equal(3, "test start wrong.");
        shop.updateInventory();
        expect(shop.getInventory()[0].quality).to.be.equal(2, "must be 2");
        shop.updateInventory();
        expect(shop.getInventory()[0].quality).to.be.equal(1, "must be 1");
    });
});