const anaylse = require('../core/lexical');

describe('一段代码测试', () => {
    it('for循环测试', () => {
        let code = `
        int result = 0;
        for(int i = 0; i < 10; i++) {
            result += i;
        }`

        let result = anaylse(code);
        console.log(result);
    })

    it('测试', () => {
        let code = `
        int n, m;
        char arr[100];
        int i;
        for(i = 0; i < m; i++) {
            int j;
            int cou = 0;
            for(j = 0; j < n; j++) {
                int k;
                for(k = 0; k < j; k++) {
                    if(arr[k] > arr[j]) {
                        cou++;
                    }
                }
            }
        }
        `
        let result = anaylse(code);
        console.log(result);
    })
})