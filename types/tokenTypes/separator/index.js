/**
 * 分隔符
 * 分隔符包括 ; , ( ) [ ] { } # //
 */

const SEMICOLON = Symbol('tokenSemicolon')
const LEFT_SMALL_BRACKET = Symbol('tokenLeftSmallBracket');
const RIGHT_SMALL_BRACKET = Symbol('tokenRightSmallBracket');
const LEFT_MIDDLE_BRACKET = Symbol('tokenLeftMiddleBracket');
const RIGHT_MIDDLE_BRACKET = Symbol('tokenRightMiddleBracket');
const LEFT_LARGE_BRACKET = Symbol('tokenLeftLargeBracket');
const RIGHT_LARGE_BRACKET = Symbol('tokenRightLargeBracket');
const POUND = Symbol('tokenPound');                             //#
const DOUBLE_SLASH = Symbol('tokenDoubleSlash');

module.exports = {
    SEMICOLON,
    LEFT_SMALL_BRACKET,
    RIGHT_SMALL_BRACKET,
    LEFT_MIDDLE_BRACKET,
    RIGHT_MIDDLE_BRACKET,
    LEFT_LARGE_BRACKET,
    RIGHT_LARGE_BRACKET,
    POUND,
    DOUBLE_SLASH,
}