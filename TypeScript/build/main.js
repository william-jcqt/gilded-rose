import Item from './Models/Item';
import rawItems from './mock-item';
var items = rawItems.map(function (item) { return new Item(item.name, item.quality, item.sellIn); });
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
