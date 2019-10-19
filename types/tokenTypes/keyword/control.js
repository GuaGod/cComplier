/**
 * 控制类型的关键字
 * for, do, while, break, continue
 */

const FOR = Symbol('tokenFor')
const DO = Symbol('tokenDo');
const WHILE = Symbol('tokenWhile');
const BREAK = Symbol('tokenBreak');
const CONTINUE = Symbol('tokenContinue');

module.exports = {
    FOR,
    DO,
    WHILE,
    BREAK,
    CONTINUE,
}