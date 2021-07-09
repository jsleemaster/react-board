const React = require('react');
const ReactDom = require('react-dom');
//끝말잇기
const WordReply = require('./WordReply');
//야구게임
const NumberBaseBall = require('./NumberBaseBall');
ReactDom.render(<WordReply />,<NumberBaseBall/>, document.querySelector('#root'));