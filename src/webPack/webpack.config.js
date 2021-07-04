const path = require('path');

module.exports = {
    name: 'wordreply-setting',
    mode: 'development',
    devtool: 'eval',
    //entry에 파일마다 확장자를 안적고 resolve에 적으면 됨
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    entry: {
        app: ['./client'],
    },//입력
    module: {
        //여러개의 규칙들
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            }
        }],
    },
    output: {
        path: path.join(__dirname, 'dist'), //dirname : 현재폴더 안에 ,'위치'
        filename: 'app.js',
    },//출력
};