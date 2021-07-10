const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
//이곳은 import를 쓰면 오류가난다.
module.exports = {
    name: 'wordreply-setting',
    mode: 'development', // 개발 development, 서비스시 production
    devtool: 'eval', //개발일땐 eval, 서비스 시 hidden-source-map
    //entry에 파일마다 확장자를 안적고 resolve에 적으면 됨
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    //entry 에 모듈 적용, 플러그인 까지 적용, 아웃풋으로 출력
    entry: {
        app: ['./Client'],
    },//입력
    module: {
        //여러개의 규칙들
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            //바벨에 대한 설정
            options: {
                presets: [
                    '@babel/preset-env',
                    //옛날 브라우저들을 지원해주기 위한 설정
                    // ['@babel/preset-env', {
                    //     target: {
                    //         //한국에서 5프로 점유율이 넘으면 자원해줘! 라는 설정
                    //         browser: ['> 5% in KR'], // browserlist 
                    //     },
                    //     debug: true,
                    // }],
                    '@babel/preset-react'],
                //플러그인들의 모임 = preset-env
                plugins: ['@babel/plugin-proposal-class-properties',
                    'react-refresh/babel']
            }
        }],
    },
    //확장프로그램
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new RefreshWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'), //dirname : 현재폴더 안에 ,'위치'
        filename: 'app.js',
        publicPath: '/dist/',
    },//출력
    devServer: {
        publicPath: '/dist/', // app.use('/dist', express.static(__dirname, 'dist'))
        //기존데이터를 유지여부
        hot: true,
    }
}