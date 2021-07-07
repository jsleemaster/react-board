//jsx로 파일 분리
const React = require('react');
const { useState } = require('react/cjs/react.production.min');
// import React, {Component, useState} from 'react';
const { Component } = React;
// //함수형
// const WordReply = () => {
//     const [word, setWord] = useState('이순명');
//     const [value, setValue] = useState('');
//     const [result, setResult] = useState('');

//     const onSubmit = (e) =>{
//         e.preventDefault();
//         if (word.length - 1 === value) {
//             setResult("딩동댕");
//             setValue('');
//             setWord(value);
//         } else{
//             setResult('땡');
//             setValue('');
//         }
//         onRefInput.current.focus();
//     }

//     const onChangeInput = (e) => {
//         setValue(e.target.value);
//     }
//     //ref 사용법
//     const onRefInput = React.useRef('');

//     return (
//         <div>
//             <div>{word}</div>
//             <form onSubmit={onSubmit}>
//                 <input ref={onRefInput} type='text' value={value} onChange={onChangeInput}/>
//                 <button>입력</button>
//             </form>
//             <div>{result}</div>
//         </div>);
// }
class WordReply extends Component {
    state = {
        word : '이순명',
        value : '',
        result : '',
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length -1] === this.state.value[0]) {
            this.setState({
                word: this.state.value,
                value: '',
                result : "딩동댕"
            });
        } else {
            this.setState({
                value : '',
                result :'땡',
            });
        }
        this.input.focus();
    }
    onChangeInput = (e) => {
        this.setState({
            value : e.target.value
        })
    }
    input;
    onInputRef = (c) => {
        this.input =c;

    }
    render() {
        return (
        <>
            <div>{this.state.word}</div>
            <form onSubmit={this.onSubmitForm}>
                <input ref={this.onInputRef} value={this.state.value} onChange={this.onChangeInput}/>
                <button>입력!</button>
            </form>
            <div>{this.state.result}</div>
        </>)
    }
}

module.exports = WordReply;
