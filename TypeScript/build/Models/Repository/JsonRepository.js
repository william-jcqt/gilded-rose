import fs from "fs";
var JsonRepository = /** @class */ (function () {
    function JsonRepository() {
    }
    JsonRepository.prototype.getInventory = function () {
        return JSON.parse(fs.readFileSync("inventory.json", "utf8"));
    };
    JsonRepository.prototype.saveInventory = function (inventory) {
        fs.writeFile('inventory.json', JSON.stringify(inventory), function (err) {
            if (err) {
                return console.error(err);
            }
            console.debug("File created!");
        });
        return inventory;
    };
    return JsonRepository;
}());
export default JsonRepository;
