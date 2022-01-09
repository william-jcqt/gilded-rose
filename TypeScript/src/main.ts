import JsonRepository from "./Models/Repository/JsonRepository";
import Shop from "./Models/Shop";
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import { Command, Option } from 'commander';
import ConsoleApplication from "./ConsoleApplication";


const jsonRepository: JsonRepository = new JsonRepository();


const shop: Shop = new Shop(jsonRepository, 40);

let executed = false;
const program = new Command();

clear();
console.log(
    chalk.red(
        figlet.textSync('Gilded Rose', { horizontalLayout: 'full' })
    )
);

program
    .command('list')
    .description('List all items in shop')
    .action(() => {
        executed = true;
        console.log(shop.getInventory());
    });

program
    .command('update')
    .description('Update all items in shop')
    .action(() => {
        executed = true;
        shop.updateInventory();
        console.log("done.");
    });


program
    .command('buy')
    .description('Buy item in shop')
    .option('-n, --name <value>', 'Name of the item')
    .action((options) => {
        executed = true;
        shop.buyItem(options.name);
        console.log('item bought.');
    });

program
    .command('sell')
    .description('Sell item in shop')
    .option('-n, --name <value>', 'Name of the item')
    .option('-q, --quality <number>', 'Quality of the item', parseInt)
    .option('-s, --sellIn <number>', 'Expiration of the item', parseInt)
    .addOption(new Option('-t, --type <type>', 'Expiration of the item').default('Basic', 'basic item').choices(['Aged', 'Basic', 'Limited', 'Legendary']))
    .action((options) => {
        executed = true;
        shop.sellItem(options);
        console.log('item sold.');
    });

program
    .command('create')
    .description('Create an item in shop')
    .option('-n, --name <value>', 'Name of the item')
    .option('-q, --quality <number>', 'Quality of the item', parseInt)
    .option('-s, --sellIn <number>', 'Expiration of the item', parseInt)
    .addOption(new Option('-t, --type <type>', 'Expiration of the item').default('Basic', 'basic item').choices(['Aged', 'Basic', 'Limited', 'Legendary']))
    .action((options) => {
        executed = true;
        console.log(options);
        shop.createItem(options);
        console.log('created.');
    });

// fix to crash with no args. (see [https://github.com/tj/commander.js/issues/338#issuecomment-113685169])
if (process.argv.length == 2) {
    program.help();
}

program.parse(process.argv);