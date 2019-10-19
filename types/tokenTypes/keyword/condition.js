/**
 * 条件控制语句
 * 条件语句关键字包括 if, else, goto
 */

const IF = Symbol('tokenIf');
const ELSE = Symbol('tokenElse');
const GOTO = Symbol('tokenGoto');

module.exports = {
    IF,
    ELSE,
    GOTO
}