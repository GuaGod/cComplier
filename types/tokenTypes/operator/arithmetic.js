/**
 * 算术类型的符号
 * 算术运算符包括 +, -, *, /, %, ++, --
 */
const PLUS = Symbol('tokenPlus')                  // +
const SUBSTRACT = Symbol('tokenSubstract');         // -
const MULTIPLE = Symbol('tokenMutiple');            //  *
const DIVISION = Symbol('tokenDivision');            // /
const REMAINDER = Symbol('tokenRemainder');         // %
const INCREMENT = Symbol('tokenIncrement');         // ++
const DECREMENT = Symbol('tokenDecrement');         // --

module.exports = {
    PLUS,
    SUBSTRACT,
    MULTIPLE,
    DIVISION,
    REMAINDER,
    INCREMENT,
    DECREMENT,
}