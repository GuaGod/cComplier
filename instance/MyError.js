const fs = require('fs');
const path = require('path');

let writeStream = fs.createWriteStream(path.join(__dirname, '../errorNote/index.txt'), {encoding: 'utf8'})
writeStream.on('error', (err) => {
    console.log('写入错误记录发生错误');
    console.log(err);
})

class MyError {
    constructor(msg = '') {
        this.msg = msg;

        let error = new Error(msg);
        MyError.takeNotes(msg, error)

        throw error;
    }

    static takeNotes(msg, error) {
        let date = new Date();
        let data = msg + ' ---- ' + error.toString() + ' ---- ' + date.toString()+ '\n';
        
        writeStream.write(data);
    }
}

module.exports = MyError