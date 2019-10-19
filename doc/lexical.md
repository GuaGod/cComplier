1. C 语言的 token 种类
I. Keywords（关键字、保留字，例如 int, while）
II. Operators（运算符，例如+, -, *, /）
III. Constants（常量，包括字符串常量和数字常量，例如 123，“dfa”）
IV. Separator（分隔符，例如{}, ()）
V. Identifiers（标识符，例如 sum）

2. C 语言词法规则
### I. Keyword: 32个系统保留字（关键字）

1. 数据类型关键字包括 char, double, enum, float, int, long, short, signed, struct, union, unsigned,
void
2. 控制语句关键字包括 for, do, while, break, continue
3. 条件语句关键字包括 if, else, goto
4. 开关语句关键字包括 switch, case, default
5. 返回语句关键字包括 return
6. 存储类型关键字包括 auto, extern, register, static
7. 其他关键字包括 const, sizeof, typedef, volatile

### II. Operators: 运算符包括算术运算符、关系运算符、逻辑运算符、位运算符、赋值运算
符和杂项运算符
1. 算术运算符包括+, -, *, /, %, ++, --
2. 关系运算符包括==, !=, >, <, >=, <=
3. 逻辑运算符包括&&, ||, !
4. 位运算符包括&, |, ^, ~, <<, >>
5. 赋值运算符包括=, +=, -=, *=, /=, %=, <<=, >>=, &=, ^=, !=
6. 杂项运算符包括 sizeof(), &, *, ?:

### III. Separator: 分隔符
1. 包括; , ( ) [ ] { } # //

### IV. Constant: 常量，包括字符串常量和数字常量
1. 字符常量包括可见字符
2. 数字常量字符包括0-9以及.

### V. Identifiers: 标识符
1. 开头可以包括字符 a-z 和 A-Z 以及下划线_
2. 之后可以包括字符 a-z, A-Z, 下划线_以及数字0-9