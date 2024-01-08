const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const asyncQuestion = (string) => new Promise((resolve, reject) => {
    rl.question(string, input => resolve(input));
});

(async () => {
    const testCases = [];
    const numberOfTestcases = Number(await asyncQuestion('Enter the number of testcases (Number): '));
    if (isNaN(numberOfTestcases) || numberOfTestcases <= 0) {
        console.log('Invalid input. Please enter a positive integer.');
        rl.close();
        return;
    };
    for (let index = 0; index < numberOfTestcases; index++) {
        const testcaseString = await asyncQuestion(`Testcase ${index + 1}: Enter score (between TT-TTLab) separated by space: `);
        const [TT, TTLab] = testcaseString.split(' ').map(Number);

        if (!isNaN(TT) && !isNaN(TTLab)) {
            testCases.push({ TT, TTLab });
        } else {
            console.log('Invalid input. Please enter two numbers separated by space.');
        }
    }
    for (let index = 0; index < testCases.length; index++) {
        const score = testCases[index];
        ScoreService.predict(score);
    }
    rl.close();
})()

class ScoreService {
    /**
     * 
     * @param {Object} score 
     * @param {Number} score.TT 
     * @param {Number} score.TTLab
     */
    static predict(score) {
        const { TT, TTLab } = score;
        // combination TT of TT + TTLab
        console.log(`Testcase TT-TTLab [${score.TT}-${score.TTLab}]:`, this.combinations(TT, TTLab + TT), 'cases');
    }
    static factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }

    static combinations(k, n) {
        return this.factorial(n) / (this.factorial(k) * this.factorial(n - k));
    }
};