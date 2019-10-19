/**
 * 逻辑运算符号
 * 逻辑运算符包括&&, ||, !
 */

const DOUBLE_AND = Symbol('tokenDoubleAnd');
const DOUBLE_OR = Symbol('tokenDoubleOr');
const NOT = Symbol('tokenNot');

module.exports = {
    DOUBLE_AND,
    DOUBLE_OR,
    NOT
}