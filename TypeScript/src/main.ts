import JsonRepository from "./Models/Repository/JsonRepository";
import Shop from "./Models/Shop";
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import { Command, Option } from 'commander';


const jsonRepository: JsonRepository = new JsonRepository();


const shop: Shop = new Shop(jsonRepository);



clear();
console.log(
    chalk.red(
        figlet.textSync('Gilded Rose', { horizontalLayout: 'full' })
    )
);

const program = new Command();

program
    .command('list')
    .description('List all items in shop')
    .action((script, options) => {
        console.log(shop.getInventory());
    });

program
    .command('update')
    .description('Update all items in shop')
    .action((script, options) => {
        shop.updateInventory();
        console.log("done.");
    });

program
    .command('create')
    .description('Create an item in shop')
    .option('-n, --name <value>', 'Name of the item')
    .option('-q, --quality <number>', 'Quality of the item', parseInt)
    .option('-s, --sellIn <number>', 'Expiration of the item', parseInt)
    .addOption(new Option('-t, --type <type>', 'Expiration of the item').default('Basic', 'basic item').choices(['Aged', 'Basic', 'Limited', 'Legendary']))
    .action((options) => {
        console.log(options);
        shop.createItem(options);
        console.log('created.');
    });




program.parse(process.argv);