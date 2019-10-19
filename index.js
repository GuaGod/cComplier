const lexicalAnaylse = require('./core/lexical');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('输入你要解析的c语言（目前只执行词法分析）');
rl.on('line', (answer) => {
    let tokens = lexicalAnaylse(answer + ' ');
    console.log(tokens);
});