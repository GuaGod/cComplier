const keywordTypes = require('./keyword');
const operatorTypes = require('./operator');
const constantTypes = require('./constant');
const separatorTypes = require('./separator');
const identifiyTypes = require('./identifiy');

module.exports = {
    ...keywordTypes,
    ...operatorTypes,
    ...constantTypes,
    ...separatorTypes,
    ...identifiyTypes,
}