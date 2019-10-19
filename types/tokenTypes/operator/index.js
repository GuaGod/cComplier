const arithmeticSymbol = require('./arithmetic.js')
const assignmentSymbol = require('./assignment.js')
const logicalSymbol = require('./logical.js');
const relationSymbol = require('./relation.js')
const positionSymbol = require('./position.js');
const sundrySymbol = require('./sundry.js');

module.exports = {
    ...arithmeticSymbol,
    ...assignmentSymbol,
    ...relationSymbol,
    ...logicalSymbol,
    ...positionSymbol,
    ...sundrySymbol,
}