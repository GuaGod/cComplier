program: statement;

### statement 语句
statement -> intDelaration                 声明整数 
            | expressionStatement          表达式
            | assignmentStatement          赋值语句

### intDelaration 声明整数
intDelaration -> 'int' Identifier ('=' additiveExpression)? ';'

### expressionStatement 表达式
expressionStatement -> additiveExpression

additiveExpression -> Number ('+' additiveExpression) ';'

### assignmentStatement 赋值语句
assignmentStatement -> Identifier '=' additiveExpression ';'