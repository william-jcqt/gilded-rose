import { expect } from 'chai';
import Shop from "../src/Models/Shop";
import InMemoryRepo from "../src/Models/Repository/InMemoryRepository";
import { ItemType, RawItem } from "../src/Types/Item";

describe("limitedItems test", () => {
    let shop: Shop;
    beforeEach(() => {
        const inMemoryRepo = new InMemoryRepo();
        shop = new Shop(inMemoryRepo);
        const rawItem0: RawItem = {
            name: "backstage pass",
            quality: 10,
            sellIn: 12,
            type: ItemType.LIMITED
        };
        const rawItem1: RawItem = {
            name: "backstage pass",
            quality: 10,
            sellIn: 9,
            type: ItemType.LIMITED
        };
        const rawItem2: RawItem = {
            name: "backstage pass2",
            quality: 10,
            sellIn: 4,
            type: ItemType.LIMITED
        };
        const rawItem3: RawItem = {
            name: "backstage pass3",
            quality: 10,
            sellIn: 0,
            type: ItemType.LIMITED
        };
        shop.createItem(rawItem0);
        shop.createItem(rawItem1);
        shop.createItem(rawItem2);
        shop.createItem(rawItem3);
    });
    it("should increment quality over time", () => { 
        expect(shop.getInventory()[0].quality).to.be.equal(10, "test start wrong.");
        // 10 days
        shop.updateInventory();
        expect(shop.getInventory()[0].quality).to.be.equal(11, "must be 11");
    });
    it("should increment quality by 2 over time with sellin in 10 days", () => { 
        expect(shop.getInventory()[1].quality).to.be.equal(10, "test start wrong.");
        // 10 days
        shop.updateInventory();
        expect(shop.getInventory()[1].quality).to.be.equal(12, "must be 12");
    });
    it("should increment quality by 3 over time with sellin in 5 days", () => { 
        expect(shop.getInventory()[2].quality).to.be.equal(10, "test start wrong.");
        // 10 days
        shop.updateInventory();
        expect(shop.getInventory()[2].quality).to.be.equal(13, "must be 13");
    });
    it("should set quality to 0 with sellin expired", () => { 
        expect(shop.getInventory()[3].quality).to.be.equal(10, "test start wrong.");
        // 10 days
        shop.updateInventory();
        expect(shop.getInventory()[3].quality).to.be.equal(0, "must be 0");
    });
});