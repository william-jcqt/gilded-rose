import JsonRepository from "./Models/Repository/JsonRepository";
import AgedItem from "./Models/AgedItem";
import LimitedItem from "./Models/LimitedItem";
import LegendaryItem from "./Models/LegendaryItem";
import BasicItem from "./Models/BasicItem";
import { ItemType, RawItem } from "./Types/Item";
import Shop from "./Models/Shop";

const jsonRepository: JsonRepository = new JsonRepository();


const shop: Shop = new Shop(jsonRepository);


shop.updateInventory();