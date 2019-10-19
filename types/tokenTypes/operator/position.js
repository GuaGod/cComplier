/**
 * 位运算符
 * 位运算符包括&, |, ^, ~, <<, >>
 */

const AND = Symbol('tokenAnd');
const OR = Symbol('tokenOr');
const NOT_OR = Symbol('tokenNotOr');
const REVERSE = Symbol('tokenReverse');
const LEFT_MOVE = Symbol('tokenLeftMove');
const RIGHT_MOVE = Symbol('tokenRightMove');

module.exports = {
    AND,
    OR,
    NOT_OR,
    REVERSE,
    LEFT_MOVE,
    RIGHT_MOVE,
}