import React, { Component } from 'react';
import Try from './Try';
//바깥에 뺀 이유는 NumberBaseball 컴포넌트에 this.로 사용되지 않으면 빼는게 좋음
//추후에 다른 곳에서도 사용할 수 있기때문에
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
        //구조분해 할당
        const {answer, value, tries} = this.state;

        e.preventDefault();
        if (value === answer.join('')){
            //옛날 함수 쓸때는 값을 지정하여 불러와줘서 사용해준다.
            this.setState((prevState) => {
                return {
                    result : '홈런',
                    tries : [...prevState.tries, {try : value, result: '홈런!'}] // 딥 카피 후 새로운 값 넣기
                }
            });
            alert('게임을 다시 시작합니다.');
            this.setState({
                value : '',
                answer :getNumbers(),
                tries:[],
            });
        } else{
            const answerArray = value.split('').map((v)=>{parseInt(v)});
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) { // 10번이상 틀릴때
                this.setState({
                    result : `10번 넘게 틀려서 실패! 답은${answer.join(',')}이였습니다!`,
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value : '',
                    answer :getNumbers(),
                    tries:[],
                });
            } else {
                for (let i=0; i<4; i++ ) {
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    } else if (answer.includes(answerArray[i])){
                        ball +=1;
                    }
                }
                this.setState((prevState)=>{
                    return {
                        tries : [...prevState.tries, {try: value, result: `${strike}스트라이크 ${ball} 볼 입니다`}],
                        value: '',
                    }
                });
            }
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
    const {tries, value} = this.state
        return(
            <>
            <div>야구게임</div>
            <form onSubmit={this.onSubmitForm}>
                <input onRef={this.onRefInput} value={value} onChange={this.onChangeInput}/>
                <button>입력</button>
            </form>
            <div>
                <ul>
                    {/* 맵함수 이용 */}
                {tries.map((e,i)=> {
                    //컴포넌트화
                    <Try key={`${i+1}차 시도 : `} tryInfo={e}/>
                })}
                </ul>
            </div>
            </>
        );
    }
}

export default NumberBaseBall;