const charTypes = require('../types/charTypes.js');

function judgeChar(char) {
    let charCode = char.charCodeAt(0);

    if(48 <= charCode && charCode <= 57) {
        return charTypes.NUMBER;
    }

    if(65 <= charCode && charCode <= 90) {
        return charTypes.CHAR;
    }

    if(87 <= charCode && charCode <= 122) {
        return charTypes.CHAR;
    }

    if(char === '+') {
        return charTypes.PLUS;
    }

    return char;
}

module.exports = judgeChar;