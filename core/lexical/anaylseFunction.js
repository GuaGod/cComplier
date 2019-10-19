const tokenTypes = require('../../types/tokenTypes/index.js');
const charTypes = require('../../types/charTypes');
const judgeChar = require('../../helper/judgeChar');
const MyError = require('../../instance/MyError.js');

const createStart = (tokens) => {
    let tk = [];
    const start = (char) => {
        let charType = judgeChar(char);
        if (char === 'a') {
            return AUTO(char);
        }

        if (char === 'b') {
            return BREAK(char);
        }

        if (char === 'i') {
            return I_BEGIN(char);
        }

        if (char === 'u') {
            return U_BEGIN(char);
        }

        if (char === 'c') {
            return C_BEGIN(char);
        }

        if (char === 'e') {
            return E_BEGIN(char);
        }

        if (char === 'f') {
            return F_BEGIN(char);
        }

        if (char === 'd') {
            return D_BEGIN(char);
        }

        if (char === 's') {
            return S_BEGIN(char);
        }

        if (char === 't') {
            return TYPEDEF(char);
        }

        if (char === 'r') {
            return R_BEGIN(char);
        }

        if (char === 'l') {
            return LONG(char);
        }

        if (char === 'v') {
            return V_BEGIN(char);
        }

        if (char === 'w') {
            return WHILE(char);
        }

        if (char === 'g') {
            return GOTO(char);
        }

        if (char === '(') {
            return LEFT_SMALL_BRACKET(char);
        }

        if (char === ')') {
            return RIGHT_SMALL_BRACKET(char);
        }

        if (char === '[') {
            return LEFT_MIDDLE_BRACKET(char);
        }

        if (char === ']') {
            return RIGHT_MIDDLE_BRACKET(char);
        }

        if (char === '{') {
            return LEFT_LARGE_BRACKET(char);
        }

        if (char === '}') {
            return RIGHT_LARGE_BRACKET(char);
        }

        if (char === '#') {
            return POUND(char);
        }

        if (char === '>') {
            return GREATER_BEGIN(char);
        }

        if (char === '<') {
            return SMALLER_BEGIN(char);
        }

        if (char === '+') {
            return PLUS(char);
        }

        if (char === '-') {
            return SUBSTRACT(char);
        }

        if (char === '*') {
            return MULTIPLE(char);          // * *=
        }

        if (char === '/') {
            return DIVISION(char);          // / /=
        }

        if (char === '%') {
            return REMAINDER(char);         // % %=
        }

        if (char === '&') {
            return AND_BEGIN(char);
        }

        if (char === '|') {
            return OR_BEGIN(char);
        }

        if (char === '^') {
            return NOT_OR_BEGIN(char);
        }

        if (char === '!') {
            return NOT_BEGIN(char);
        }

        if (char === '~') {
            return REVERSE(char);
        }

        if (charType === charTypes.NUMBER) {
            return NUMBER(char);
        }

        if (char === '=') {
            return ASSIGNMENT(char);
        }

        if (charType === charTypes.CHAR || char === '_') {
            return IDENTIFIY(char);
        }

        if (char === ';') {
            return SEMICOLON(char);
        }

        if (char === ',') {
            return COMMA(char);
        }

        return start;
    }

    function REVERSE(char) {
        let token = tokens.createToken(tokenTypes.REVERSE, '~');
        tokens.push(token);
        tk = [];

        return start;
    }

    function AND_BEGIN(char) {
        if(tk.length === 0 && char === '&') {
            tk.push(char);
            return AND_BEGIN;
        }

        if(tk.length === 1) {
            if(char === '&') {
                return DOUBLE_AND(char);
            }

            if(char === '=') {
                return AND_ASSIGNMENT(char);
            }

            return AND(char);
        }

        new MyError('& token出错');
    }

    function AND(char) {
        if(tk.length === 0 && char === '&') {
            tk.push(char);
            return AND;
        }

        if(tk.length === 1 && char !== '=' && char !== '&') {
            let token = tokens.createToken(tokenTypes.AND, '&');
            tokens.push(token);
            tk = [];

            return start(char);
        }
    }

    function DOUBLE_AND(char) {
        if(tk.length === 0 && char === '&') {
            tk.push(char);
            return DOUBLE_AND;
        }

        if(tk.length === 1) {
            if(char === '&') {
                let token = tokens.createToken(tokenTypes.DOUBLE_AND, '&&');
                tokens.push(token);
                tk = [];
    
                return start;
            }
        }

        new MyError('&& token出错');
    }

    function AND_ASSIGNMENT(char) {
        if(tk.length === 0 && char === '&') {
            tk.push(char);
            return DOUBLE_AND;
        }

        if(tk.length === 1) {
            if(char === '=') {
                let token = tokens.createToken(tokenTypes.AND_ASSIGNMENT, '&=');
                tokens.push(token);
                tk = [];
    
                return start;
            }
        }

        new MyError('&= token出错');
    }

    function OR_BEGIN(char) {
        if(tk.length === 0 && char === '|') {
            tk.push(char);
            return OR_BEGIN;
        }
    
        if(tk.length === 1) {
            if(char === '|') {
                return DOUBLE_OR(char);
            }
    
            if(char === '=') {
                return OR_ASSIGNMENT(char);
            }
    
            return OR(char);
        }
    
        new MyError('| token出错');
    }
    
    function OR(char) {
        if(tk.length === 0 && char === '|') {
            tk.push(char);
            return OR;
        }
    
        if(tk.length === 1 && char !== '=' && char !== '|') {
            let token = tokens.createToken(tokenTypes.OR, '|');
            tokens.push(token);
            tk = [];
    
            return start(char);
        }
    }
    
    function DOUBLE_OR(char) {
        if(tk.length === 0 && char === '|') {
            tk.push(char);
            return DOUBLE_OR;
        }
    
        if(tk.length === 1) {
            if(char === '|') {
                let token = tokens.createToken(tokenTypes.DOUBLE_OR, '||');
                tokens.push(token);
                tk = [];
    
                return start;
            }
        }
    
        new MyError('|| token出错');
    }
    
    function OR_ASSIGNMENT(char) {
        if(tk.length === 0 && char === '|') {
            tk.push(char);
            return DOUBLE_OR;
        }
    
        if(tk.length === 1) {
            if(char === '=') {
                let token = tokens.createToken(tokenTypes.OR_ASSIGNMENT, '|=');
                tokens.push(token);
                tk = [];
    
                return start;
            }
        }
    
        new MyError('|= token出错');
    }

    function NOT_OR_BEGIN(char) {
        if(tk.length === 0 && char === '^') {
            tk.push(char);
            return NOT_OR_BEGIN;
        }
    
        if(tk.length === 1) {
            if(char === '=') {
                return NOT_OR_ASSIGNMENT(char);
            }
    
            return NOT_OR(char);
        }
    
        new MyError('^ token出错');
    }

    function NOT_OR(char) {
        if(tk.length === 1) {
            let token = tokens.createToken(tokenTypes.NOT_OR, '^');
            tokens.push(token);
            tk = [];

            return start(char);
        }
    }

    function NOT_OR_ASSIGNMENT(char) {
        if(char === '=') {
            tk.push(char);
            let token = tokens.createToken(tokenTypes.NOT_OR_ASSIGNMENT, '^=');
            tokens.push(token);
            tk = [];

            return start;
        }
    }

    function NOT_BEGIN(char) {
        if(tk.length === 0 && char === '!') {
            tk.push(char);
            return NOT_BEGIN;
        }

        if(tk.length === 1) {
            if(char === '=') {
                return IS_NOT_ASSIGNMENT(char);
            }

            return NOT(char);
        }
    }

    function NOT(char) {
        if(tk.length === 0 && char === '!') {
            tk.push(char);
            return NOT;
        }

        if(tk.length === 1) {
            if(char !== '=') {
                let token = tokens.createToken(tokenTypes.NOT, 'not');
                tokens.push(token);
                tk = [];
    
                return start(char);
            }
        }

    }

    function WHILE(char) {
        if(tk.length === 0) {
            if(char === 'w') {
                tk.push(char);
                return WHILE;
            }
        }

        if(tk.length === 1) {
            if(char === 'h') {
                tk.push(char);
                return WHILE;
            }
        }

        if(tk.length === 2) {
            if(char === 'i') {
                tk.push(char);
                return WHILE;
            } 
        }

        if(tk.length === 3) {
            if(char === 'l') {
                tk.push(char);
                return WHILE;
            } 
        }

        if(tk.length === 4) {
            if(char === 'e') {
                tk.push(char);
                return WHILE;
            }
        }

        if(tk.length === 5) {
            let charType = judgeChar(char);
            if(charType !== charTypes.CHAR && charType !== charTypes.NUMBER && char !== '_') {
                let token = tokens.createToken(tokenTypes.WHILE, 'while');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function GOTO(char) {
        if(tk.length === 0) {
            if(char === 'g') {
                tk.push(char);
                return GOTO;
            }
        }

        if(tk.length === 1) {
            if(char === 'o') {
                tk.push(char);
                return GOTO;
            }
        }

        if(tk.length === 2) {
            if(char === 't') {
                tk.push(char);
                return GOTO;
            } 
        }

        if(tk.length === 3) {
            if(char === 'o') {
                tk.push(char);
                return GOTO;
            } 
        }

        if(tk.length === 4) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.GOTO, 'goto');
                tokens.push(token);
                tk = [];
    
                return start(char);
            }
        }

        return IDENTIFIY(char); 
    }

    function AUTO(char) {
        if(tk.length === 0) {
            if(char === 'a') {
                tk.push(char);
                return AUTO;
            }
        }

        if(tk.length === 1) {
            if(char === 'u') {
                tk.push(char);
                return AUTO;
            }
        }

        if(tk.length === 2) {
            if(char === 't') {
                tk.push(char);
                return AUTO;
            } 
        }

        if(tk.length === 3) {
            if(char === 'o') {
                tk.push(char);
                return AUTO;
            } 
        }

        if(tk.length === 4) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.AUTO, 'auto');
                tokens.push(token);
                tk = [];
    
                return start(char);
            }
        }

        return IDENTIFIY(char); 
    } 

    function BREAK(char) {
        if(tk.length === 0) {
            if(char === 'b') {
                tk.push(char);
                return BREAK;
            }
        }

        if(tk.length === 1) {
            if(char === 'r') {
                tk.push(char);
                return BREAK;
            }
        }

        if(tk.length === 2) {
            if(char === 'e') {
                tk.push(char);
                return BREAK;
            } 
        }

        if(tk.length === 3) {
            if(char === 'a') {
                tk.push(char);
                return BREAK;
            } 
        }

        if(tk.length === 4) {
            if(char === 'k') {
                tk.push(char);
                return BREAK;
            }
        }

        if(tk.length === 5) {
            if(char === ' ' || char === ';') {
                let token = tokens.createToken(tokenTypes.BREAK, 'break');
                tokens.push(token);
                tk = [];
    
                return start(char);
            }
        }

        return IDENTIFIY(char); 
    }

    function U_BEGIN(char) {
        if(tk.length === 0 && char === 'u') {
            tk.push(char);
            return U_BEGIN;
        }

        if(tk.length === 1 && char === 'n') {
            tk.push(char);
            return U_BEGIN;
        }

        if(tk.length === 2) {
            if(char === 'i') {
                return UNION(char);
            }
            
            if(char === 's') {
                return UNSIGNED(char);
            }
        }

        return IDENTIFIY(char); 
    }

    function UNION(char) {
        if(tk.length === 0) {
            if(char === 'u') {
                tk.push(char);
                return UNION;
            }
        }

        if(tk.length === 1) {
            if(char === 'n') {
                tk.push(char);
                return UNION;
            }
        }

        if(tk.length === 2) {
            if(char === 'i') {
                tk.push(char);
                return UNION;
            } 
        }

        if(tk.length === 3) {
            if(char === 'o') {
                tk.push(char);
                return UNION;
            } 
        }

        if(tk.length === 4) {
            if(char === 'n') {
                tk.push(char);
                return UNION;
            }
        }

        if(tk.length === 5) {
            if(char === ' ' || char === ';') {
                let token = tokens.createToken(tokenTypes.UNION, 'union');
                tokens.push(token);
                tk = [];
    
                return start(char);
            }
        }

        return IDENTIFIY(char); 
    }

    function UNSIGNED(char) {
        if(tk.length === 0) {
            if(char === 'u') {
                tk.push(char);
                return UNSIGNED;
            }
        }

        if(tk.length === 1) {
            if(char === 'n') {
                tk.push(char);
                return UNSIGNED;
            }
        }

        if(tk.length === 2) {
            if(char === 's') {
                tk.push(char);
                return UNSIGNED;
            }
        }

        if(tk.length === 3) {
            if(char === 'i') {
                tk.push(char);
                return UNSIGNED;
            }
        }

        if(tk.length === 4) {
            if(char === 'g') {
                tk.push(char);
                return UNSIGNED;
            } 
        }

        if(tk.length === 5) {
            if(char === 'n') {
                tk.push(char);
                return UNSIGNED;
            } 
        }

        if(tk.length === 6) {
            if(char === 'e') {
                tk.push(char);
                return UNSIGNED;
            }
        }

        if(tk.length === 7) {
            if(char === 'd') {
                tk.push(char);
                return UNSIGNED;
            } 
        }
 
        if(tk.length === 8) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.UNSIGNED, 'unsigned');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function S_BEGIN(char) {
        if(tk.length === 0 && char === 's') {
            tk.push(char);
            return S_BEGIN;
        }

        if(tk.length === 1) {
            if(char === 'h') {
                return SHORT(char);
            }

            if(char === 'w') {
                return SWITCH(char);
            }

            if(char === 't') {
                tk.push(char);
                return S_BEGIN;
            }

            if(char === 'i') {
                tk.push(char);
                return S_BEGIN;
            }
        }

        if(tk.length === 2) {
            if(tk[1] === 't') {
                if(char === 'r') {
                    return STRUCT(char);
                }
    
                if(char === 'a') {
                    return STATIC(char);
                }
            }

            if(tk[1] === 'i') {
                if(char === 'z') {
                    return SIZEOF(char);
                }

                if(char === 'g') {
                    return SIGNED(char);
                }
            }
        }

        return IDENTIFIY(char); 
    }

    function SHORT(char) {
        if(tk.length === 0) {
            if(char === 's') {
                tk.push(char);
                return SHORT;
            }
        }

        if(tk.length === 1) {
            if(char === 'h') {
                tk.push(char);
                return SHORT;
            }
        }

        if(tk.length === 2) {
            if(char === 'o') {
                tk.push(char);
                return SHORT;
            } 
        }

        if(tk.length === 3) {
            if(char === 'r') {
                tk.push(char);
                return SHORT;
            } 
        }

        if(tk.length === 4) {
            if(char === 't') {
                tk.push(char);
                return SHORT;
            }
        }

        if(tk.length === 5) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.SHORT, 'short');
                tokens.push(token);
                tk = [];
    
                return start(char);
            }
        }

        return IDENTIFIY(char); 
    }

    function SIGNED(char) {
        if(tk.length === 0) {
            if(char === 's') {
                tk.push(char);
                return SIGNED;
            }
        }

        if(tk.length === 1) {
            if(char === 'i') {
                tk.push(char);
                return SIGNED;
            }
        }

        if(tk.length === 2) {
            if(char === 'g') {
                tk.push(char);
                return SIGNED;
            } 
        }

        if(tk.length === 3) {
            if(char === 'n') {
                tk.push(char);
                return SIGNED;
            } 
        }

        if(tk.length === 4) {
            if(char === 'e') {
                tk.push(char);
                return SIGNED;
            }
        }

        if(tk.length === 5) {
            if(char === 'd') {
                tk.push(char);
                return SIGNED;
            } 
        }
 
        if(tk.length === 6) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.SIGNED, 'signed');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function STRUCT(char) {
        if(tk.length === 0) {
            if(char === 's') {
                tk.push(char);
                return STRUCT;
            }
        }

        if(tk.length === 1) {
            if(char === 't') {
                tk.push(char);
                return STRUCT;
            }
        }

        if(tk.length === 2) {
            if(char === 'r') {
                tk.push(char);
                return STRUCT;
            } 
        }

        if(tk.length === 3) {
            if(char === 'u') {
                tk.push(char);
                return STRUCT;
            } 
        }

        if(tk.length === 4) {
            if(char === 'c') {
                tk.push(char);
                return STRUCT;
            }
        }

        if(tk.length === 5) {
            if(char === 't') {
                tk.push(char);
                return STRUCT;
            } 
        }
 
        if(tk.length === 6) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.STRUCT, 'struct');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function SWITCH(char) {
        if(tk.length === 0) {
            if(char === 's') {
                tk.push(char);
                return SWITCH;
            }
        }

        if(tk.length === 1) {
            if(char === 'w') {
                tk.push(char);
                return SWITCH;
            }
        }

        if(tk.length === 2) {
            if(char === 'i') {
                tk.push(char);
                return SWITCH;
            } 
        }

        if(tk.length === 3) {
            if(char === 't') {
                tk.push(char);
                return SWITCH;
            } 
        }

        if(tk.length === 4) {
            if(char === 'c') {
                tk.push(char);
                return SWITCH;
            }
        }

        if(tk.length === 5) {
            if(char === 'h') {
                tk.push(char);
                return SWITCH;
            } 
        }
 
        if(tk.length === 6) {
            let charType = judgeChar(char);
            if(charType !== charTypes.NUMBER && charType !== charTypes.CHAR && char !== '_') {
                let token = tokens.createToken(tokenTypes.SWITCH, 'switch');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function STATIC(char) {
        if(tk.length === 0) {
            if(char === 's') {
                tk.push(char);
                return STATIC;
            }
        }

        if(tk.length === 1) {
            if(char === 't') {
                tk.push(char);
                return STATIC;
            }
        }

        if(tk.length === 2) {
            if(char === 'a') {
                tk.push(char);
                return STATIC;
            } 
        }

        if(tk.length === 3) {
            if(char === 't') {
                tk.push(char);
                return STATIC;
            } 
        }

        if(tk.length === 4) {
            if(char === 'i') {
                tk.push(char);
                return STATIC;
            }
        }

        if(tk.length === 5) {
            if(char === 'c') {
                tk.push(char);
                return STATIC;
            } 
        }
 
        if(tk.length === 6) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.STATIC, 'static');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function SIZEOF(char) {
        if(tk.length === 0) {
            if(char === 's') {
                tk.push(char);
                return SIZEOF;
            }
        }

        if(tk.length === 1) {
            if(char === 'i') {
                tk.push(char);
                return SIZEOF;
            }
        }

        if(tk.length === 2) {
            if(char === 'z') {
                tk.push(char);
                return SIZEOF;
            } 
        }

        if(tk.length === 3) {
            if(char === 'e') {
                tk.push(char);
                return SIZEOF;
            } 
        }

        if(tk.length === 4) {
            if(char === 'o') {
                tk.push(char);
                return SIZEOF;
            }
        }

        if(tk.length === 5) {
            if(char === 'f') {
                tk.push(char);
                return SIZEOF;
            } 
        }
 
        if(tk.length === 6) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.SIZEOF, 'sizeof');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function LONG(char) {
        if(tk.length === 0) {
            if(char === 'l') {
                tk.push(char);
                return LONG;
            }
        }

        if(tk.length === 1) {
            if(char === 'o') {
                tk.push(char);
                return LONG;
            }
        }

        if(tk.length === 2) {
            if(char === 'n') {
                tk.push(char);
                return LONG;
            } 
        }

        if(tk.length === 3) {
            if(char === 'g') {
                tk.push(char);
                return LONG;
            } 
        }

        if(tk.length === 4) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.LONG, 'long');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function D_BEGIN(char) {
        if (tk.length === 0 && char === 'd') {
            tk.push(char);
            return D_BEGIN;
        }

        if (tk.length === 1) {
            if(char === 'e') {
                return DEFAULT(char);
            }

            if(char === 'o') {
                tk.push(char);
                return D_BEGIN;
            }
        }

        if (tk.length === 2) {
            if(char === 'u') {
                return DOUBLE(char);
            }

            return DO(char);
        }


        return IDENTIFIY(char);
    }

    function R_BEGIN(char) {
        if(tk.length === 0) {
            if(char === 'r') {
                tk.push(char);
                return R_BEGIN;
            }
        }

        if(tk.length === 1) {
            if(char === 'e') {
                tk.push(char);
                return R_BEGIN;
            }
        }

        if(tk.length === 2) {
            if(char === 't') {
                return RETURN(char);
            }

            if(char === 'g') {
                return REGISTER(char);
            }
        }

        return IDENTIFIY(char);
    }

    function RETURN(char) {
        if(tk.length === 0) {
            if(char === 'r') {
                tk.push(char);
                return RETURN;
            }
        }

        if(tk.length === 1) {
            if(char === 'e') {
                tk.push(char);
                return RETURN;
            }
        }

        if(tk.length === 2) {
            if(char === 't') {
                tk.push(char);
                return RETURN;
            } 
        }

        if(tk.length === 3) {
            if(char === 'u') {
                tk.push(char);
                return RETURN;
            } 
        }

        if(tk.length === 4) {
            if(char === 'r') {
                tk.push(char);
                return RETURN;
            }
        }

        if(tk.length === 5) {
            if(char === 'n') {
                tk.push(char);
                return RETURN;
            } 
        }
 
        if(tk.length === 6) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.RETURN, 'return');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function REGISTER(char) {
        if(tk.length === 0) {
            if(char === 'r') {
                tk.push(char);
                return REGISTER;
            }
        }

        if(tk.length === 1) {
            if(char === 'e') {
                tk.push(char);
                return REGISTER;
            }
        }

        if(tk.length === 2) {
            if(char === 'g') {
                tk.push(char);
                return REGISTER;
            } 
        }

        if(tk.length === 3) {
            if(char === 'i') {
                tk.push(char);
                return REGISTER;
            } 
        }

        if(tk.length === 4) {
            if(char === 's') {
                tk.push(char);
                return REGISTER;
            }
        }

        if(tk.length === 5) {
            if(char === 't') {
                tk.push(char);
                return REGISTER;
            } 
        }

        if(tk.length === 6) {
            if(char === 'e') {
                tk.push(char);
                return REGISTER;
            } 
        }

        if(tk.length === 7) {
            if(char === 'r') {
                tk.push(char);
                return REGISTER;
            } 
        }

        if(tk.length === 8) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.REGISTER, 'register');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function DEFAULT(char) {
        if(tk.length === 0) {
            if(char === 'd') {
                tk.push(char);
                return DEFAULT;
            }
        }

        if(tk.length === 1) {
            if(char === 'e') {
                tk.push(char);
                return DEFAULT;
            }
        }

        if(tk.length === 2) {
            if(char === 'f') {
                tk.push(char);

                return DEFAULT;
            } 
        }

        if(tk.length === 3) {
            if(char === 'a') {
                tk.push(char);

                return DEFAULT;
            } 
        }

        if(tk.length === 4) {
            if(char === 'u') {
                tk.push(char);

                return DEFAULT;
            }
        }

        if(tk.length === 5) {
            if(char === 'l') {
                tk.push(char);

                return DEFAULT;
            } 
        }

        if(tk.length === 6) {
            if(char === 't') {
                tk.push(char);

                return DEFAULT;
            } 
        }

        if(tk.length === 7) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.DEFAULT, 'default');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function DOUBLE(char) {
        if(tk.length === 0) {
            if(char === 'd') {
                tk.push(char);
                return DOUBLE;
            }
        }

        if(tk.length === 1) {
            if(char === 'o') {
                tk.push(char);
                return DOUBLE;
            }
        }

        if(tk.length === 2) {
            if(char === 'u') {
                tk.push(char);

                return DOUBLE;
            } 
        }

        if(tk.length === 3) {
            if(char === 'b') {
                tk.push(char);

                return DOUBLE;
            } 
        }

        if(tk.length === 4) {
            if(char === 'l') {
                tk.push(char);

                return DOUBLE;
            }
        }

        if(tk.length === 5) {
            if(char === 'e') {
                tk.push(char);

                return DOUBLE;
            } 
        }

        if(tk.length === 6) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.DOUBLE, 'double');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function DO(char) {
        if (tk.length === 0) {
            if (char === 'd') {
               tk.push(char);
               return DO;
            }
         }
 
         if (tk.length === 1) {
             if(char === 'o') {
                 tk.push(char);
                 return DO;
             }
         }
 
         if (tk.length === 2) {
             let charType = judgeChar(char);
             if(charType !== charTypes.CHAR && charType !== charTypes.NUMBER && char !== '_') {
                let token = tokens.createToken(tokenTypes.DO, 'do');
                tokens.push(token);
                tk = [];
                return start;
             }
         }

        return IDENTIFIY(char);
    }

    /**
     * 以i开头的
     * @param {*} char 
     */

    function I_BEGIN(char) {
        if (tk.length === 0 && char === 'i') {
            tk.push(char);
            return I_BEGIN;
        }

        if (tk.length === 1) {
            if(char === 'n') {
                return INT(char);
            }
    
            if(char === 'f') {
                return IF(char);
            }
        }


        return IDENTIFIY(char);
    }

    /**
     * @method INT 检测声明符号int
     * @param {*} char 
     */
    function INT(char) {
        if (tk.length === 0) {
           if (char === 'i') {
              tk.push(char);
              return INT;
           }
        }

        if (tk.length === 1) {
            if(char === 'n') {
                tk.push(char);
                return INT;
            }
        }

        if (tk.length === 2) {
            if(char === 't') {
                tk.push(char);
                return INT;
            }
        }

        if (tk.length === 3) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.INT, 'int');
                tokens.push(token);
                tk = [];
                return start;
            }
        }

        return IDENTIFIY(char);
    }

    function IF(char) {
        if (tk.length === 0) {
            if (char === 'i') {
               tk.push(char);
               return IF;
            }
         }
 
         if (tk.length === 1) {
             if(char === 'f') {
                 tk.push(char);
                 return IF;
             }
         }
 
         if (tk.length === 2) {
             if(char === ' ') {
                let token = tokens.createToken(tokenTypes.IF, 'if');
                tokens.push(token);
                tk = [];
                return start;
             }
         }

        return IDENTIFIY(char);
    }

    function E_BEGIN(char) {
        if (tk.length === 0 && char === 'e') {
            tk.push(char);
            return E_BEGIN;
        }

        if(tk.length === 1) {
            if(char === 'n') {
                return ENUM(char);
            }
    
            if(char === 'l') {
                return ELSE(char);
            }
    
            if(char === 'x') {
                return EXTERN(char);
            }
        }
        
        return IDENTIFIY(char);
    }

    function ENUM(char) {
        if(tk.length === 0) {
            if(char === 'e') {
                tk.push(char);
                return ENUM;
            }
        }

        if(tk.length === 1) {
            if(char === 'n') {
                tk.push(char);
                return ENUM;
            }
        }

        if(tk.length === 2) {
            if(char === 'u') {
                tk.push(char);
                return ENUM;
            } 
        }

        if(tk.length === 3) {
            if(char === 'm') {
                tk.push(char);
                return ENUM;
            } 
        }

        if(tk.length === 4) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.ENUM, 'enum');
                tokens.push(token);
                tk = [];
    
                return start(char);
            }
        }

        return IDENTIFIY(char);
    }

    function ELSE(char) {
        if(tk.length === 0) {
            if(char === 'e') {
                tk.push(char);
                return ELSE;
            }
        }

        if(tk.length === 1) {
            if(char === 'l') {
                tk.push(char);
                return ELSE;
            }
        }

        if(tk.length === 2) {
            if(char === 's') {
                tk.push(char);
                return ELSE;
            } 
        }

        if(tk.length === 3) {
            if(char === 'e') {
                tk.push(char);
                return ELSE;
            } 
        }

        if(tk.length === 4) {
            let charType = judgeChar(char);
            if(charType !== charTypes.NUMBER && charType !== charTypes.CHAR && char !== '_') {
                let token = tokens.createToken(tokenTypes.ELSE, 'else');
                tokens.push(token);
                tk = [];
    
                return start(char);
            }
        }

        return IDENTIFIY(char);
    }

    function EXTERN(char) {
        if(tk.length === 0) {
            if(char === 'e') {
                tk.push(char);
                return EXTERN;
            }
        }

        if(tk.length === 1) {
            if(char === 'x') {
                tk.push(char);
                return EXTERN;
            }
        }

        if(tk.length === 2) {
            if(char === 't') {
                tk.push(char);

                return EXTERN;
            } 
        }

        if(tk.length === 3) {
            if(char === 'e') {
                tk.push(char);

                return EXTERN;
            } 
        }

        if(tk.length === 4) {
            if(char === 'r') {
                tk.push(char);

                return EXTERN;
            }
        }

        if(tk.length === 5) {
            if(char === 'n') {
                tk.push(char);

                return EXTERN;
            } 
        }

        if(tk.length === 6) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.EXTERN, 'extern');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function C_BEGIN(char) {
        if(tk.length === 0) {
            if(char === 'c') {
                tk.push(char);

                return C_BEGIN;
            }
        }

        if(tk.length === 1) {
            if(char === 'h') {
                return CHAR(char);
            }

            if(char === 'a') {
                return CASE(char);
            }

            if(char === 'o') {
                tk.push(char);

                return C_BEGIN;
            }
        }

        if(tk.length === 2) {
            if(char === 'n') {
                tk.push(char);

                return C_BEGIN;
            }
        }

        if(tk.length === 3) {
            if(char === 't') {
                return CONTINUE(char);
            }

            if(char === 's') {
                return CONST(char);
            }
        }

        return IDENTIFIY(char);
    }

    function CHAR(char) {
        if(tk.length === 0) {
            if(char === 'c') {
                tk.push(char);
                return CHAR;
            }
        }

        if(tk.length === 1) {
            if(char === 'h') {
                tk.push(char);
                return CHAR;
            }
        }

        if(tk.length === 2) {
            if(char === 'a') {
                tk.push(char);

                return CHAR;
            } 
        }

        if(tk.length === 3) {
            if(char === 'r') {
                tk.push(char);

                return CHAR;
            } 
        }

        if(tk.length === 4) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.CHAR, 'char');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function CASE(char) {
        if(tk.length === 0) {
            if(char === 'c') {
                tk.push(char);
                return CASE;
            }
        }

        if(tk.length === 1) {
            if(char === 'a') {
                tk.push(char);
                return CASE;
            }
        }

        if(tk.length === 2) {
            if(char === 's') {
                tk.push(char);

                return CASE;
            } 
        }

        if(tk.length === 3) {
            if(char === 'e') {
                tk.push(char);

                return CASE;
            } 
        }

        if(tk.length === 4) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.CASE, 'case');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function CONST(char) {
        if(tk.length === 0) {
            if(char === 'c') {
                tk.push(char);
                return CONST;
            }
        }

        if(tk.length === 1) {
            if(char === 'o') {
                tk.push(char);
                return CONST;
            }
        }

        if(tk.length === 2) {
            if(char === 'n') {
                tk.push(char);

                return CONST;
            } 
        }

        if(tk.length === 3) {
            if(char === 's') {
                tk.push(char);

                return CONST;
            } 
        }

        if(tk.length === 4) {
            if(char === 't') {
                tk.push(char);

                return CONST;
            }
        }

        if(tk.length === 5) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.CONST, 'const');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function CONTINUE(char) {
        if(tk.length === 0) {
            if(char === 'c') {
                tk.push(char);
                return CONTINUE;
            }
        }

        if(tk.length === 1) {
            if(char === 'o') {
                tk.push(char);
                return CONTINUE;
            }
        }

        if(tk.length === 2) {
            if(char === 'n') {
                tk.push(char);

                return CONTINUE;
            } 
        }

        if(tk.length === 3) {
            if(char === 't') {
                tk.push(char);

                return CONTINUE;
            } 
        }

        if(tk.length === 4) {
            if(char === 'i') {
                tk.push(char);

                return CONTINUE;
            }
        }

        if(tk.length === 5) {
            if(char === 'n') {
                tk.push(char);

                return CONTINUE;
            } 
        }

        if(tk.length === 6) {
            if(char === 'u') {
                tk.push(char);

                return CONTINUE;
            } 
        }

        if(tk.length === 7) {
            if(char === 'e') {
                tk.push(char);

                return CONTINUE;
            } 
        }

        if(tk.length === 8) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.CONTINUE, 'continue');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function F_BEGIN(char) {
        if (tk.length === 0 && char === 'f') {
            tk.push(char);
            return F_BEGIN;
        }
        
        if (tk.length === 1) {
            if(char === 'o') {
                return FOR(char);
            }

            if(char === 'l') {
                return FLOAT(char);
            }
        }

        return IDENTIFIY(char);
    }

    /**
     * @method FOR 控制语句关键字for
     * @param {*} char 
     */

    function FOR(char) {
        if(tk.length === 0) {
            if(char === 'f') {
                tk.push(char);
                return FOR
            }
        }

        if(tk.length === 1) {
            if(char === 'o') {
                tk.push(char);
                return FOR
            }
        }
        
        if(tk.length === 2) {
            if(char === 'r') {
                tk.push(char);
                return FOR
            }
        }

        if(tk.length === 3) {
            let charType = judgeChar(char);
            if(charType !== charTypes.NUMBER && charType !== charTypes.CHAR && char !== '_') {
                let token = tokens.createToken(tokenTypes.FOR, 'for');
                tokens.push(token);
                tk = [];
    
                return start(char);
            }
        }

        return IDENTIFIY(char);
    }

    function FLOAT(char) {
        if(tk.length === 0) {
            if(char === 'f') {
                tk.push(char);
                return FLOAT;
            }
        }

        if(tk.length === 1) {
            if(char === 'l') {
                tk.push(char);
                return FLOAT;
            }
        }

        if(tk.length === 2) {
            if(char === 'o') {
                tk.push(char);

                return FLOAT;
            } 
        }

        if(tk.length === 3) {
            if(char === 'a') {
                tk.push(char);

                return FLOAT;
            } 
        }

        if(tk.length === 4) {
            if(char === 't') {
                tk.push(char);

                return FLOAT;
            }
        }

        if(tk.length === 5) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.FLOAT, 'float');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function V_BEGIN(char) {
        if (tk.length === 0 && char === 'v') {
            tk.push(char);
            return V_BEGIN;
        }

        if (tk.length === 1) {
            if(char === 'o') {
                tk.push(char);
                return V_BEGIN;
            }
        }

        if (tk.length === 2) {
            if(char === 'i') {
                return VOID(char);
            }

            if(char === 'l') {
                return VOLATILE(char);
            }
        }

        return IDENTIFIY(char);
    }

    function VOID(char) {
        if(tk.length === 0) {
            if(char === 'v') {
                tk.push(char);
                return VOID;
            }
        }

        if(tk.length === 1) {
            if(char === 'o') {
                tk.push(char);
                return VOID;
            }
        }

        if(tk.length === 2) {
            if(char === 'i') {
                tk.push(char);
                return VOID;
            } 
        }

        if(tk.length === 3) {
            if(char === 'd') {
                tk.push(char);
                return VOID;
            } 
        }

        if(tk.length === 4) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.VOID, 'void');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function VOLATILE(char) {
        if(tk.length === 0) {
            if(char === 'v') {
                tk.push(char);
                return VOLATILE;
            }
        }

        if(tk.length === 1) {
            if(char === 'o') {
                tk.push(char);
                return VOLATILE;
            }
        }

        if(tk.length === 2) {
            if(char === 'l') {
                tk.push(char);

                return VOLATILE;
            } 
        }

        if(tk.length === 3) {
            if(char === 'a') {
                tk.push(char);

                return VOLATILE;
            } 
        }

        if(tk.length === 4) {
            if(char === 't') {
                tk.push(char);

                return VOLATILE;
            }
        }

        if(tk.length === 5) {
            if(char === 'i') {
                tk.push(char);

                return VOLATILE;
            } 
        }

        if(tk.length === 6) {
            if(char === 'l') {
                tk.push(char);

                return VOLATILE;
            } 
        }

        if(tk.length === 7) {
            if(char === 'e') {
                tk.push(char);

                return VOLATILE;
            } 
        }

        if(tk.length === 8) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.VOLATILE, 'volatile');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    function TYPEDEF(char) {
        if(tk.length === 0) {
            if(char === 't') {
                tk.push(char);
                return TYPEDEF;
            }
        }

        if(tk.length === 1) {
            if(char === 'y') {
                tk.push(char);
                return TYPEDEF;
            }
        }

        if(tk.length === 2) {
            if(char === 'p') {
                tk.push(char);

                return TYPEDEF;
            } 
        }

        if(tk.length === 3) {
            if(char === 'e') {
                tk.push(char);

                return TYPEDEF;
            } 
        }

        if(tk.length === 4) {
            if(char === 'd') {
                tk.push(char);

                return TYPEDEF;
            }
        }

        if(tk.length === 5) {
            if(char === 'e') {
                tk.push(char);

                return TYPEDEF;
            } 
        }

        if(tk.length === 6) {
            if(char === 'f') {
                tk.push(char);

                return TYPEDEF;
            } 
        }

        if(tk.length === 7) {
            if(char === ' ') {
                let token = tokens.createToken(tokenTypes.TYPEDEF, 'typedef');
                tokens.push(token);
                tk = [];
                return start;
            } 
        }

        return IDENTIFIY(char);
    }

    /**
     * @method LEFT_SMALL_BRACKET //左小括号
     * @param {*} char 
     */

    function LEFT_SMALL_BRACKET(char) {
        if (char === '(') {
            let token = tokens.createToken(tokenTypes.LEFT_SMALL_BRACKET, '(');
            tokens.push(token);
            tk = [];

            return start;
        }

        return start;
    }

    /**
     * @method RIGHT_SMALL_BRACKET //右小括号
     * @param {*} char 
     */

    function RIGHT_SMALL_BRACKET(char) {
        if (char === ')') {
            let token = tokens.createToken(tokenTypes.RIGHT_SMALL_BRACKET, ')');
            tokens.push(token);
            tk = [];

            return start;
        }

        return start;
    }

    /**
     * @method LEFT_MIDDLE_BRACKET //左中括号
     * @param {*} char 
     */
    function LEFT_MIDDLE_BRACKET(char) {
        if (char === '[') {
            let token = tokens.createToken(tokenTypes.LEFT_MIDDLE_BRACKET, '[');
            tokens.push(token);
            tk = [];

            return start;
        }

        return start;
    }

    /**
     * @method RIGHT_MIDDLE_BRACKET //右中括号
     * @param {*} char 
     */

    function RIGHT_MIDDLE_BRACKET(char) {
        if (char === ']') {
            let token = tokens.createToken(tokenTypes.RIGHT_MIDDLE_BRACKET, ']');
            tokens.push(token);
            tk = [];

            return start;
        }

        return start;
    }


    /**
     * @method LEFT_LARGE_BRACKET //左大括号
     * @param {*} char 
     */
    function LEFT_LARGE_BRACKET(char) {
        if (char === '{') {
            let token = tokens.createToken(tokenTypes.LEFT_LARGE_BRACKET, '{');
            tokens.push(token);
            tk = [];

            return start;
        }

        return start;
    }

    /**
     * @method RIGHT_LARGE_BRACKET //右大括号
     * @param {*} char 
     */

    function RIGHT_LARGE_BRACKET(char) {
        if (char === '}') {
            let token = tokens.createToken(tokenTypes.RIGHT_LARGE_BRACKET, '}');
            tokens.push(token);
            tk = [];

            return start;
        }

        return start;
    }

    /**
     * @method POUND #
     * @param {*} char 
     */

     function POUND(char) {
        if (char === '#') {
            let token = tokens.createToken(tokenTypes.POUND, '#');
            tokens.push(token);
            tk = [];

            return start;
        }

        return start;
    }

    /**
     * @method DOUBLE_SLASH  //
     * @param {*} char 
     */

    function DOUBLE_SLASH(char) {
        if (tk.length === 0 && char === '/') {
            tk.push('/');
            return DOUBLE_SLASH;
        }

        if(char === '/') {
            let token = tokens.createToken(tokenTypes.DOUBLE_SLASH, '//');
            tokens.push(token);
            tk = [];

            return start;
        }

        new MyError('//token出错，不可以只有一个/');
    }

    /**
     * @method ASSIGNMENT =
     * @param {*} char 
     */

    function ASSIGNMENT(char) {
        if (tk.length === 0 && char === '=') {
            tk.push(char);

            return ASSIGNMENT;
        }

        if (char !== '=') {
            let token = tokens.createToken(tokenTypes.ASSIGNMENT, '=');
            tokens.push(token);
            tk = [];

            return start;
        }

        if (char === '=') {
            return IS_ASSIGNMENT(char);
        }

        return start;
    }

    /**
     * @method IS_ASSIGNMENT ==
     * @param {*} char 
     */

    function IS_ASSIGNMENT(char) {
        if (tk[0] === '=' && char === '=') {
            tk.push(char);
            let token = tokens.createToken(tokenTypes.IS_ASSIGNMENT, '==');
            tokens.push(token);
            tk = [];

            return start;
        }

        return start;
    }

    function IS_NOT_ASSIGNMENT(char) {
        if(tk.length === 0) {
            if(char === '!') {
                tk.push(char);

                return IS_NOT_ASSIGNMENT;
            }
        }

        if(tk.length === 1) {
            if(char === '=') {
                tk.push(char);

                let token = tokens.createToken(tokenTypes.IS_NOT_ASSIGNMENT, '!=');
                tokens.push(token);
                tk = [];

                return start;
            }
        }

        new MyError('!=token出错');
    }

    function GREATER_BEGIN(char) {
        if(tk.length === 0 && char === '>') {
            tk.push(char);
            return GREATER_BEGIN;
        }

        if(tk.length === 1) {
            if(char === '>') {
                return DOUBLE_GREATER_ASSIGNMENT(char);
            }

            if(char === '=') {
                return GREATER_ASSIGNMENT_THAN(char);
            }

            return GREATER_THAN(char);
        }
    }

    function GREATER_THAN(char) {
        let token = tokens.createToken(tokenTypes.GREATER_THAN, '>');
        tokens.push(token);
        tk = [];

        return start(char);
    }

    function GREATER_ASSIGNMENT_THAN(char) {
        if (tk.length === 0 && char === '>') {
            tk.push(char);
            return GREATER_ASSIGNMENT_THAN;
        }

        if (tk.length === 1 && char === '=') {
            tk.push(char);
            return GREATER_ASSIGNMENT_THAN;
        }

        if(tk.length === 2) {
            let token = tokens.createToken(tokenTypes.GREATER_ASSIGNMENT_THAN, '>=');
            tokens.push(token);
            tk = [];
            return start(char);
        }
    }

    function DOUBLE_GREATER_ASSIGNMENT(char) {
        if (tk.length === 0 && char === '>') {
            tk.push(char);
            return DOUBLE_GREATER_ASSIGNMENT;
        }

        if (tk.length === 1 && char === '>') {
            tk.push(char);
            return DOUBLE_GREATER_ASSIGNMENT
        }

        if(tk.length === 2 && char === '=') {
            let token = tokens.createToken(tokenTypes.DOUBLE_GREATER_ASSIGNMENT, '>>=');
            tokens.push(token);
            tk = [];

            return start;
        }
    }

    function SMALLER_BEGIN(char) {
        if(tk.length === 0 && char === '<') {
            tk.push(char);
            return SMALLER_BEGIN;
        }

        if(tk.length === 1) {
            if(char === '<') {
                return DOUBLE_SMALLER_ASSIGNMENT(char);
            }

            if(char === '=') {
                return SMALLER_ASSIGNMENT_THAN(char);
            }

            return SMALLER_THAN(char);
        }
    }

    function SMALLER_THAN(char) {
        let token = tokens.createToken(tokenTypes.SMALLER_THAN, '<');
        tokens.push(token);
        tk = [];

        return start(char);
    }

    /**
     * @method SMALLER_THAN <
     * @param {*} char 
     */
    function SMALLER_ASSIGNMENT_THAN(char) {
        if (tk.length === 0 && char === '<') {
            tk.push(char);
            return SMALLER_ASSIGNMENT_THAN
        }

        if (tk.length === 1 && char === '=') {
            tk.push(char);
            return SMALLER_ASSIGNMENT_THAN;
        }

        if(tk.length === 2) {
            let token = tokens.createToken(tokenTypes.SMALLER_ASSIGNMENT_THAN, '<=');
            tokens.push(token);
            tk = [];
            return start(char);
        }
    }

    function DOUBLE_SMALLER_ASSIGNMENT(char) {
        if (tk.length === 0 && char === '<') {
            tk.push(char);
            return DOUBLE_SMALLER_ASSIGNMENT;
        }

        if (tk.length === 1 && char === '<') {
            tk.push(char);
            return DOUBLE_SMALLER_ASSIGNMENT
        }

        if(tk.length === 2 && char === '=') {
            let token = tokens.createToken(tokenTypes.DOUBLE_SMALLER_ASSIGNMENT, '<<=');
            tokens.push(token);
            tk = [];

            return start;
        }
    }

 

    /**
     * @method SEMICOLON 分号
     * @param {*} char 
     */
    function SEMICOLON(char) {
        if (char === ';') {
            tk.push(char);
            token = tokens.createToken(tokenTypes.SEMICOLON, tk.join(''));
            tokens.push(token);
            tk = [];

            return start;
        }

        return start;
    }

    function PLUS(char) {
        if (tk.length === 0 && char === '+') {
            tk.push('+');

            return PLUS;
        }

        if (char === '+') {
            return INCREMENT(char);
        }

        if (char === '=') {
            return PLUS_ASSIGNMENT(char);
        }

        let token = tokens.createToken(tokenTypes.PLUS, '+');
        tokens.push(token);
        tk = [];

        return start(char);
    }

    function INCREMENT(char) {
        if (tk.length === 0 && char === '+') {
            tk.push('+');

            return INCREMENT;
        }

        if (char === '+') {
            let token = tokens.createToken(tokenTypes.INCREMENT, '++');
            tokens.push(token);
            tk = [];

            return start;
        }

        if (char === '=') {
            return PLUS_ASSIGNMENT(char);
        }

        new MyError('自增号token出错');
        return start(char);
    }

    function PLUS_ASSIGNMENT(char) {
        if (tk.length === 0 && char === '+') {
            tk.push('+');

            return PLUS_ASSIGNMENT;
        }

        if (char === '+') {
            return INCREMENT(char);
        }

        if (char === '=') {
            let token = tokens.createToken(tokenTypes.PLUS_ASSIGNMENT, '+=');
            tokens.push(token);
            tk = [];
            return start;
        }

        new MyError('加等于赋值token出错');
        return start(char);
    }

    function SUBSTRACT(char) {
        if (tk.length === 0 && char === '-') {
            tk.push('-');
    
            return SUBSTRACT;
        }
    
        if (char === '-') {
            return DECREMENT(char);
        }
    
        if (char === '=') {
            return SUBSTRACT_ASSIGNMENT(char);
        }
    
        let token = tokens.createToken(tokenTypes.SUBSTRACT, '-');
        tokens.push(token);
        tk = [];
    
        return start(char);
    }
    
    function DECREMENT(char) {
        if (tk.length === 0 && char === '-') {
            tk.push('-');
    
            return DECREMENT;
        }
    
        if (char === '-') {
            let token = tokens.createToken(tokenTypes.DECREMENT, '--');
            tokens.push(token);
            tk = [];
    
            return start;
        }
    
        if (char === '=') {
            return SUBSTRACT_ASSIGNMENT(char);
        }
    
        new MyError('自减号token出错');
        return start(char);
    }
    
    function SUBSTRACT_ASSIGNMENT(char) {
        if (tk.length === 0 && char === '-') {
            tk.push('-');
    
            return SUBSTRACT_ASSIGNMENT;
        }
    
        if (char === '-') {
            return DECREMENT(char);
        }
    
        if (char === '=') {
            let token = tokens.createToken(tokenTypes.SUBSTRACT_ASSIGNMENT, '-=');
            tokens.push(token);
            tk = [];
            return start;
        }
    
        new MyError('减等于赋值token出错');
        return start(char);
    }

    function MULTIPLE(char) {
        if (tk.length === 0 && char === '*') {
            tk.push('*');
    
            return MULTIPLE;
        }
    
        if (char === '=') {
            return MULTIPLE_ASSIGNMENT(char);
        }
    
        let token = tokens.createToken(tokenTypes.MULTIPLE, '*');
        tokens.push(token);
        tk = [];
    
        return start(char);
    }
    
    function MULTIPLE_ASSIGNMENT(char) {
        if (tk.length === 0 && char === '*') {
            tk.push('*');
    
            return MULTIPLE_ASSIGNMENT;
        }
    
        if (char === '=') {
            let token = tokens.createToken(tokenTypes.MULTIPLE_ASSIGNMENT, '*=');
            tokens.push(token);
            tk = [];
            return start;
        }
    
        new MyError('乘等于赋值token出错');
        return start(char);
    }  
    
    function DIVISION(char) {
        if (tk.length === 0 && char === '/') {
            tk.push('/');
    
            return DIVISION;
        }
    
        if (char === '=') {
            return DIVISION_ASSIGNMENT(char);
        }

        if (char === '/') {
            return DOUBLE_SLASH(char);
        }
    
        let token = tokens.createToken(tokenTypes.DIVISION, '/');
        tokens.push(token);
        tk = [];
    
        return start(char);
    }
    
    function DIVISION_ASSIGNMENT(char) {
        if (tk.length === 0 && char === '/') {
            tk.push('/');
    
            return DIVISION_ASSIGNMENT;
        }
    
        if (char === '=') {
            let token = tokens.createToken(tokenTypes.DIVISION_ASSIGNMENT, '/=');
            tokens.push(token);
            tk = [];
            return start;
        }
    
        new MyError('除等于赋值token出错');
        return start(char);
    }

    function REMAINDER(char) {
        if (tk.length === 0 && char === '%') {
            tk.push('%');
    
            return REMAINDER;
        }
    
        if (char === '=') {
            return REMAINDER_ASSIGNMENT(char);
        }
    
        let token = tokens.createToken(tokenTypes.REMAINDER, '%');
        tokens.push(token);
        tk = [];
    
        return start(char);
    }
    
    function REMAINDER_ASSIGNMENT(char) {
        if (tk.length === 0 && char === '%') {
            tk.push('%');
    
            return REMAINDER_ASSIGNMENT;
        }
    
        if (char === '=') {
            let token = tokens.createToken(tokenTypes.REMAINDER_ASSIGNMENT, '%=');
            tokens.push(token);
            tk = [];
            return start;
        }
    
        new MyError('取余等于赋值token出错');
        return start(char);
    }    
    
    function COMMA(char) {
        if(char === ',') {
            let token = tokens.createToken(tokenTypes.COMMA, ',');
            tokens.push(token);
    
            return start;
        }
    }

    function NUMBER(char) {
        let charType = judgeChar(char);
        if (charType === charTypes.NUMBER) {
            tk.push(char);

            return NUMBER;
        }

        if(charType === '.') {
            let hasFind = false;
            tk.forEach((item) => {
                if(item === '.') {
                    hasFind = true;
                }
            })

            if(!hasFind) {
                tk.push(char);
                return NUMBER;
            } else {
                new MyError('小数点只能有一个');
            }
        }

        if (char === ' ' || char === ';' || char === ')' || char === ']') {
            let token = tokens.createToken(tokenTypes.NUMBER, tk.join(''));
            tokens.push(token);
            tk = [];

            return start(char);
        }

        new MyError('数字token解析错误');
        return start;
    }

    function IDENTIFIY(char) {
        let charType = judgeChar(char);
        if (char === '[') {
            let token = tokens.createToken(tokenTypes.IDENTIFIY, tk.join(''));
            tokens.push(token);
            tk = [];
            return LEFT_MIDDLE_BRACKET(char);
        }

        if (char === '_' || charType === charTypes.CHAR) {
            tk.push(char);
            return IDENTIFIY;
        }

        if (tk.length !== 0 && charType === charTypes.NUMBER) {
            tk.push(char);
            return IDENTIFIY;
        }


        let token = tokens.createToken(tokenTypes.IDENTIFIY, tk.join(''));
        tokens.push(token);
        tk = [];

        return start(char);
    }

    return start
}

module.exports = createStart;