declare type RawItem = {
    name: string,
    type: ItemType,
    quality: number,
    sellIn: number
}

enum ItemType {
    LIMITED = "Limited",
    BASIC = "Basic",
    AGED = "Aged",
    LEGENDARY = "Legendary"
}

export { RawItem, ItemType };