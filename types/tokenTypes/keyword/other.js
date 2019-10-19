/**
 * 其他关键字
 * 其他关键字包括 const, sizeof, typedef, volatile
 */

const CONST = Symbol('tokenConst');
const SIZEOF = Symbol('tokenSizeof');
const TYPEDEF = Symbol('tokenTypedef');
const VOLATILE = Symbol('tokenVolatile');

module.exports = {
    CONST,
    SIZEOF,
    TYPEDEF,
    VOLATILE,
}