import React, { Component } from 'react';
import Try from './Try';
function getNumbers(){
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i=0; i<4; i++ ) {
        const chosen = candidate.slice(Math.floor(Math.random()* (9-i)),1)[0];
        array.push(chosen);
    }
    return array;
}
//야구게임
class NumberBaseBall extends Component {
    state = {
        result : '',
        value : '',
        answer: getNumbers(),
        tries:[],// push쓰면 안됨
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.value === this.state.answer.join('')){
            this.setState({
                result : '홈런',
                tries : [...this.state.tries, {try : this.state.value, result: '홈런!'}] // 딥 카피 후 새로운 값 넣기
            })
        } else{

        }
    }
    onChangeInput = (e) => {
        e.preventDefault();
        this.setState({
            value : e.target.value,
        })
    }

    input;
    onRef = (e) => {
        this.input = e;
    }
    fruits = [
        {key : 1, title: '사과',taste :'달다'},
        {key : 2, title: '배',taste :'달다'},
        {key : 3, title: '감',taste :'떫다'},
        {key : 4, title: '귤',taste :'달다'},
        {key : 5, title: '밤',taste :'텁텁하다'},
        {key : 6, title: '체리',taste :'시큼하다'},
    ]
    render(){
        return(
            <>
            <div>야구게임</div>
            <form onSubmit={this.onSubmitForm}>
                <input onRef={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
                <button></button>
            </form>
            <div>
                <ul>
                    {/* 맵함수 이용 */}
                {this.fruits.map((e,i)=> {
                    //컴포넌트화
                    <Try key={e.key} value={e} index={i}/>
                })}
                </ul>
            </div>
            </>
        );
    }
}

export default NumberBaseBall;