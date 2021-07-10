import React, { Component } from 'react';
//야구게임
class NumberBaseBall extends Component {
    state = {
        result : '',
        value : ''
    }
    onSubmitForm = (e) => {
        e.preventDefault();
    }
    onChangeInput = () => {

    }

    input;
    onRef = (e) => {
        this.input = e;
    }
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
                {['hi','hello'].map((e)=> {
                    <li>{e}</li>
                })}
                </ul>
            </div>
            </>
        );
    }
}

export default NumberBaseBall;