import Shop from './Models/Shop';
import rawItems from './mock-item';
// const items = rawItems.map(item => new Item(item.name, item.quality, item.sellIn));
var shop = new Shop(rawItems);
console.log(shop.itemList);
var days = 40;
for (var i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    shop.itemList.forEach(function (element) {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
        element.update();
    });
}
