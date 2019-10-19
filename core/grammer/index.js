const tokenTypes = require('../../types/tokenTypes');
const TreeNode = require('../../instance/TreeNode');
const sentenceTypes = require('../../types/sentenceTypes');

let tokens = null;
let root = new TreeNode();
function statement() {
    let token = tokens.peek();
    if(token.type === tokenTypes.int) {
        intDelaration();
    }
}

function intDelaration() {
    let token = tokens.read();
    let child = new TreeNode(null, sentenceTypes.intDelaration);
    root.pushSon(child);
    if(token !== null && token.type === tokenTypes.int) {
        let childSon1 = new TreeNode(token);
        token = tokens.read();

        if(token !== null && token.type === tokenTypes.identifiy) {
            let childSon2 = new TreeNode(token);

            token = tokens.read();

            if(token !== null && token.type === tokenTypes.over) {
                let childSon3 = new TreeNode(token);

                child.pushSon([childSon1, childSon2, childSon3]);
            } else if(token !== null && token.type === tokenTypes.assignment) {
                /**
                 * 表达式判定
                 */
            } else {
                throw new Error('int 标识符 后面必须接赋值语句或分号');
            }
        } else {
            throw new Error('int 后面必须跟一个标识符');
        }
    }

    throw new Error('int 出错');
}

function expressionStatement() {

}

function assignmentStatement() {
    let token = tokens.read();
    let child = new TreeNode(null, sentenceTypes.assignment);
    root.pushSon(child);

    if(token !== null && token.type === tokenTypes.identifiy) {
        let childSon1 = new TreeNode(token);
        token = tokens.read();

        if(token !== null && token.type === tokenTypes.assignment) {
            let childSon2 = new TreeNode(token);

            token = tokens.read();
        } else {
            
        }
    } else {
        throw new Error('assignment 出错');
    }
}

function additiveExpression() {

}


function analyse(tks) {
    tokens = tks;
    
}

module.exports = analyse;