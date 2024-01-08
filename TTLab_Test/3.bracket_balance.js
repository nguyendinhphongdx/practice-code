const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const asyncQuestion = (string) => new Promise((resolve, reject) => {
    rl.question(string, input => resolve(input.trim()));
});

(async () => {
    const testCases = [];
    const numberOfTestcases = Number(await asyncQuestion('Enter the number of testcases: '));
    if (isNaN(numberOfTestcases) || numberOfTestcases <= 0) {
        console.log('Invalid input. Please enter a positive integer.');
        rl.close();
        return;
    };
    for (let index = 0; index < numberOfTestcases; index++) {
        const testcaseString = await asyncQuestion(`Testcase ${index + 1}: Enter brackets string separated by space: `);
        const brackets = testcaseString.split(' ');
        const accepts = ['{', '}', '(', ')', '[', ']'];
        if (brackets.every(b => accepts.includes(b))) {
            testCases.push(brackets);
        } else {
            console.log('Invalid input. Please only enter brackets');
        }
    }
    for (let index = 0; index < testCases.length; index++) {
        const brackets = testCases[index];
        console.log(`Testcase ${index + 1} >>${brackets.join(',')}<<:`, BracketService.isBalance(brackets));
    }
    rl.close();
})()

class BracketService {
    static couples = {
        '{': '}',
        '(': ')',
        '[': ']',
    };
    static isBalance(brackets) {
        if (brackets.length == 0) return true;
        if (brackets.length % 2 !== 0) return false;
        for (let index = 0; index < brackets.length / 2; index++) {
            const bracket = brackets[index];
            const symmetryBracket = brackets[brackets.length - index - 1];
            if (!this.isCouple(bracket, symmetryBracket)) return false;
        }
        return true;
    }
    static isCouple(b, sb) {
        if(!this.couples[b]) return false;
        return this.couples[b] == sb;
    }
};