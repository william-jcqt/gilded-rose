import Item from './Models/Item';
import rawItems from './mock-item';

const items = rawItems.map(item => new Item(item.name, item.quality, item.sellIn));

console.log(items);

var days: number = 40;
for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
        element.updateQuality();
    });
}