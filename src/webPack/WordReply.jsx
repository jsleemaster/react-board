//jsx로 파일 분리
const React = require('react');
const { useState } = require('react/cjs/react.production.min');
const { Component } = React;

const WordReply = () => {
    const [word, setWord] = useState('이순명');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        if (word.length - 1 === value) {
            setResult("딩동댕");
            setValue('');
            setWord(value);
        } else{
            setResult('땡');
            setValue('');
        }
        onRefInput.current.focus();
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }
    //ref 사용법
    const onRefInput = React.useRef('');

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmit}>
                <input ref={onRefInput} type='text' value={value} onChange={onChangeInput}/>
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>);
}

module.exports = WordReply;