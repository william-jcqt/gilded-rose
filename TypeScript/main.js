"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = require("./Models/Item");
var mock_item_1 = require("./mock-item");
var items = mock_item_1.default.map(function (item) { return new Item_1.default(item.name, item.quality, item.sellIn); });
console.log(items);
var days = 40;
for (var i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(function (element) {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
        element.updateQuality();
    });
}
