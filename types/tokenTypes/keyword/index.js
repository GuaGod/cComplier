const condition = require('./condition.js');
const dataKeyword = require('./data.js');
const controlKeyword = require('./control.js');
const switchKeyword = require('./switch.js');
const otherKeyword = require('./other.js');
const storageKeyword = require('./storge.js');
const returnKeyword = require('./return.js');

module.exports = {
    ...dataKeyword,
    ...controlKeyword,
    ...condition,
    ...switchKeyword,
    ...otherKeyword,
    ...storageKeyword,
    ...returnKeyword,
}