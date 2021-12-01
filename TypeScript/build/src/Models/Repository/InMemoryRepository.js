var InMemoryRepository = /** @class */ (function () {
    function InMemoryRepository() {
        this.inventory = [];
    }
    InMemoryRepository.prototype.getInventory = function () {
        return this.inventory;
    };
    InMemoryRepository.prototype.saveInventory = function (inventory) {
        this.inventory = inventory;
        return this.inventory;
    };
    return InMemoryRepository;
}());
export default InMemoryRepository;
