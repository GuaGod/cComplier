const { Tokens } = require('../../instance/Tokens');
const createStart = require('./anaylseFunction.js');

function analyse(str) {
    let tokens = new Tokens();
    let start = createStart(tokens);

    for(let i = 0, length = str.length; i < length; i++) {
        start = start(str[i]);
    }
  
    return tokens;
}

module.exports = analyse