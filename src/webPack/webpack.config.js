const path = require('path');

module.exports = {
    name: 'wordreply-setting',
    mode: 'development',
    devtool: 'eval',
    //entry에 파일마다 확장자를 안적고 resolve에 적으면 됨
    resolve: {
        extentions: ['js', 'jsx']
    },
    entry: {
        app: ['./client']
    },//입력
    output: {
        path: path.join(__dirname, 'dist'), //dirname : 현재폴더 안에 ,'위치'
        filename: 'app.js',
    },//출력
}