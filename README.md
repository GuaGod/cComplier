### 启动说明
1. 首先需要下载node http://nodejs.cn/ 下载最新版即可
2. 安装node之后 到项目根目录运行 npm install 安装本项目依赖
3. 安装完成后，运行相应指令
    npm run start 启动编译器
    npm run test 运行单元测试

### 架构说明
1. core 核心代码 包含grammer（语法分析） 和 lexical（词法分析）
2. doc 文档
3. errorNote 错误日志系统，记录编译过程中的报错日志
4. helper 辅助函数
5. instance 实例
6. types token, 字符等的类型文件
7. test 单元测试

### 词法分析未完成部分
杂项运算符包括 sizeof(), *, ?:
字符常量包括可见字符