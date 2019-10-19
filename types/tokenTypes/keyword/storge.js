/**
 * 存储类型关键字
 * 存储类型关键字包括 auto, extern, register, static
 */

const AUTO = Symbol('tokenAuto');
const EXTERN = Symbol('tokenExtern');
const REGISTER = Symbol('tokenRegister');
const STATIC = Symbol('tokenSTATIC');

module.exports = {
    AUTO,
    EXTERN,
    REGISTER,
    STATIC
}