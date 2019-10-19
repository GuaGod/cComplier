const lexicalAnaylse = require('./core/lexical');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


console.log('让我康康你写了啥');
rl.on('line', (answer) => {
    let tokens = lexicalAnaylse(answer + ' ');
    console.log(tokens);
});