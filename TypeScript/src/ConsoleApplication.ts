import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import { Command, Option } from 'commander';
import Shop from "./Models/Shop";

export default class ConsoleApplication {
    private executed: boolean;
    private program: Command;
    private shop: Shop;

    constructor(shop: Shop) {
        this.executed = false;
        this.shop = shop;
        this.program = new Command();
    }

    public init(argv) {
        this.figlet();

        this.program
            .command('list')
            .description('List all items in shop')
            .action(this.displayInventoryCommand);

        this.program
            .command('update')
            .description('Update all items in shop')
            .action(this.updateInventoryCommand);


        this.program
            .command('buy')
            .description('Buy item in shop')
            .option('-n, --name <value>', 'Name of the item')
            .action(this.buyItemCommand);

        this.program
            .command('sell')
            .description('Sell item in shop')
            .option('-n, --name <value>', 'Name of the item')
            .option('-q, --quality <number>', 'Quality of the item', parseInt)
            .option('-s, --sellIn <number>', 'Expiration of the item', parseInt)
            .addOption(new Option('-t, --type <type>', 'Expiration of the item').default('Basic', 'basic item').choices(['Aged', 'Basic', 'Limited', 'Legendary']))
            .action(this.sellItemCommand);

        this.program
            .command('create')
            .description('Create an item in shop')
            .option('-n, --name <value>', 'Name of the item')
            .option('-q, --quality <number>', 'Quality of the item', parseInt)
            .option('-s, --sellIn <number>', 'Expiration of the item', parseInt)
            .addOption(new Option('-t, --type <type>', 'Expiration of the item').default('Basic', 'basic item').choices(['Aged', 'Basic', 'Limited', 'Legendary']))
            .action(this.createInventoryCommand);

        // fix to crash with no args. (see [https://github.com/tj/commander.js/issues/338#issuecomment-113685169])
        if (process.argv.length == 2) {
            this.program.help();
        }

        this.program.parse(argv);
    }

    private figlet() {
        clear();
        console.log(
            chalk.red(
                figlet.textSync('Gilded Rose', { horizontalLayout: 'full' })
            )
        );
    }

    public displayInventoryCommand() {
        this.executed = true;
        console.log(this.shop.getInventory());
    }

    public updateInventoryCommand() {
        this.executed = true;
        this.shop.updateInventory();
        console.log("done.");
    }

    public createInventoryCommand(options) {
        this.executed = true;
        console.log(options);
        this.shop.createItem(options);
        console.log('created.');
    }

    public buyItemCommand(options) {
        this.executed = true;
        this.shop.buyItem(options.name);
        console.log('item bought.');
    }

    public sellItemCommand(options) {
        this.executed = true;
        this.shop.sellItem(options);
        console.log('item sold.');
    }
}