import React, { Component, useState } from 'react';
//읽기 컨텐츠
//클래스형
class ClassGugudan extends Component {
    state = {
        first: Math.ceil(Math.random() * 9),
        seconde: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first * this.state.seconde) {
            //이전 상태값을 함수로 받아 올 수 있다.
            this.setState((prevState) => {
                return {
                    result: "정답 :" + prevState.value,
                    first: Math.ceil(Math.random() * 9),
                    seconde: Math.ceil(Math.random() * 9),
                    value: ''
                };
            });
        } else {
            this.setState({
                result: "땡",
                value: ''
            })
        }
        this.input.focus();
    }
    onChange = (e) => {
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
    }
    onRefInput = (e) => {
        this.input = e
    }
    render() {
        return (
            <div>
                <h1>{this.state.first} * {this.state.seconde} = ?</h1>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange}></input>
                    <button>입력!</button>
                </form>
                <p>{this.state.result}</p>
            </div>
        );
    }
}
//함수형
const GuGuDan = () => {
    //함수형으로 스테이트를 관리하는 방법 React Hooks
    //구조분해 할당이라고 한다 아래와 같은 형식을
    //[state, setState] = useState('state 값');
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [seconde, setSeconde] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    //ref 사용법
    const onRefInput = React.useRef('');
    //함수도 선언해줘야함
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * seconde) {
            setResult("정답" + value);
            setFirst(Math.ceil(Math.random() * 9));
            setSeconde(Math.ceil(Math.random() * 9));
            setValue('');
        } else {
            setResult("땡");
            setValue('');
        }
        onRefInput.current.focus();
    }
    return (
        <div>
            <h1>{first} * {seconde} = ?</h1>
            <form onSubmit={onSubmit}>
                <input ref={onRefInput} type="number" value={value} onChange={onChange}></input>
                <button>입력!</button>
            </form>
            <p>{result}</p>
        </div>
    );
}
export default GuGuDan;