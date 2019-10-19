/**
 * 赋值运算符
 * 赋值运算符包括=, +=, -=, *=, /=, %=, <<=, >>=, &=, ^=, !=
 */

const ASSIGNMENT = Symbol('tokenAssignment')
const PLUS_ASSIGNMENT = Symbol('tokenPlusAssignment');
const SUBSTRACT_ASSIGNMENT = Symbol('tokenSubstratAssignment');
const MULTIPLE_ASSIGNMENT = Symbol('tokenMutipleAssignment');
const DIVISION_ASSIGNMENT = Symbol('tokenDivisionAssignment'); 
const REMAINDER_ASSIGNMENT = Symbol('tokenRemainderAssignment'); 
const AND_ASSIGNMENT = Symbol('tokenAndAssignment');
const OR_ASSIGNMENT = Symbol('tokenOrAssignment');
const NOT_OR_ASSIGNMENT = Symbol('tokenNotOrAssignment');
const DOUBLE_SMALLER_ASSIGNMENT = Symbol('tokenDoubleSmallerAssignment');
const DOUBLE_GREATER_ASSIGNMENT = Symbol('tokenDoubleGreaterAssignment');

module.exports = {
    ASSIGNMENT,
    PLUS_ASSIGNMENT,
    SUBSTRACT_ASSIGNMENT,
    MULTIPLE_ASSIGNMENT,
    DIVISION_ASSIGNMENT,
    REMAINDER_ASSIGNMENT,
    AND_ASSIGNMENT,
    OR_ASSIGNMENT,
    NOT_OR_ASSIGNMENT,
    DOUBLE_SMALLER_ASSIGNMENT,
    DOUBLE_GREATER_ASSIGNMENT,
}