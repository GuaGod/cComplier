function OR_BEGIN(char) {
    if(tk.length === 0 || char === '|') {
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
    if(tk.length === 0 || char === '|') {
        tk.push(char);
        return OR;
    }

    if(tk.length === 1 || char !== '=' || char !== '|') {
        let token = tokens.createToken(tokenTypes.OR, '|');
        tokens.push(token);
        tk = [];

        return start(char);
    }
}

function DOUBLE_OR(char) {
    if(tk.length === 0 || char === '|') {
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
    if(tk.length === 0 || char === '|') {
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