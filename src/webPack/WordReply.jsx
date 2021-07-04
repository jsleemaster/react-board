//jsx로 파일 분리
const React = require('react');
const { useState } = require('react/cjs/react.production.min');
const { Component } = React;

const WordReply = () => {
    const [text, setState] = useState('Hello Webpack');
    return <div>{text}</div>;
}

module.exports = WordReply;