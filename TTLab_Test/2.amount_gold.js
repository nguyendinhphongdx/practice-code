const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const asyncQuestion = (string) => new Promise((resolve, reject) => {
    rl.question(string, input => resolve(input));
});

(async () => {

    const inputString = await asyncQuestion('Enter m (monsters), d(durability), k(reduction),c (gold): ');
    const [monsters, durability, reduction, gold] = inputString.split(' ').map(Number);
    const state = {
        monsters,
        durability,
        reduction,
        gold,
    };
    for (const key in state) {
        if (isNaN(state[key])) {
            console.log('Invalid input. Please enter the same as suggested.');
            rl.close();
            return;
        }
    }

    console.log('Mark needs to prepare a minimum amount of gold of', new DiabbloService().predictGold(monsters, durability, reduction, gold));
    rl.close();
})()

class DiabbloService {
    amount = 0;
    retainDurability = 0;

    predictGold(monsters, durability, reduction, gold) {
        this.retainDurability = durability;
        for (let index = 0; index < monsters; index++) { // loop monsters
            // after pass level with reduction
            this.retainDurability -= reduction; // decrease durability
            if (this.retainDurability <= reduction) { // need repair 
                this.amount += gold;
                this.retainDurability = durability;
            }
        }
        return this.amount;
    }
};