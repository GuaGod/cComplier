/**
 * 开关类型关键字
 *  开关语句关键字包括 switch, case, default
 */
const SWITCH = Symbol('tokenSwitch');
const CASE = Symbol('tokenCase');
const DEFAULT = Symbol('tokenDefault');

module.exports = {
    SWITCH,
    CASE,
    DEFAULT
}