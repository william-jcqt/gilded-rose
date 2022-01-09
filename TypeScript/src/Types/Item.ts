declare type RawItem = {
    name: string,
    type: ItemType,
    quality: number,
    value: number,
    sellIn: number
}

enum ItemType {
    LIMITED = "Limited",
    BASIC = "Basic",
    AGED = "Aged",
    LEGENDARY = "Legendary"
}

export { RawItem, ItemType };