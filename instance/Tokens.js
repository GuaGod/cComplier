class Token {
    constructor(type, value) {
        if(type === undefined) {
            throw new Error('token must has a type');
        }
        this.type = type;
        this.value = value;
    }

    getType() {
        return this.type;
    }

    getValue() {
        return this.value;
    }
}

class Tokens {
    constructor() {
        this.store = [];
        this.nowIndex = 0;
        this.count = 0;
    }

    createToken(type, value) {
        let token = new Token(type, value);
        
        return token;
    }

    push(args) {
        if(args instanceof Array) {
            this.store.push.apply(null, array);
            this.count += array.length;
            return ;
        }

        this.store.push(args);
        this.count += 1;
    }

    back(position) {
        position = this.nowIndex - position;
        if(position < 0) {
            throw new Error('back too much');
        }

        this.nowIndex = position;
    }

    unread() {
        this.nowIndex -= 1;
    }

    read() {
        this.nowIndex += 1;

        return this.store[this.nowIndex - 1] || null;   
    }

    peek() {
        return this.store[this.nowIndex - 1] || null;
    }
}

module.exports = {
    Token,
    Tokens,
}