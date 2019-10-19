class TreeNode {
    constructor(token, type) {
        this.token = token;
        this.children = [];
        this.type = type;
    }

    pushSon(args) {
        if(args instanceof Array) {
            Array.prototype.push.apply(this.children, args);
            return ;
        }

        this.children.push(args);
    }
}

modulex.exports = TreeNode