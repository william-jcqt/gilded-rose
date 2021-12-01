import JsonRepository from "./Models/Repository/JsonRepository";
import Shop from "./Models/Shop";
var jsonRepository = new JsonRepository();
var shop = new Shop(jsonRepository);
shop.updateInventory();
