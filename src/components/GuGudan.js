import React, { Component } from 'react';
//읽기 컨텐츠
class Gugudan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: Math.ceil(Math.random() * 9),
            seconde: Math.ceil(Math.random() * 9),
            value: '',
            result: '',
        }
    }
    onSubmit = (e) => {
        let number = this.state.value;
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first * this.state.seconde) {
            this.setState({
                result: "답 : " + number + "정답!",
                first: Math.ceil(Math.random() * 9),
                seconde: Math.ceil(Math.random() * 9),
                value: ''
            })
        } else {
            this.setState({
                result: "땡",
                value: ''
            })
        }
    }
    onChange = (e) => {
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.first} * {this.state.seconde} = ?</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="number" value={this.state.value} onChange={this.onChange}></input>
                    <button>입력!</button>
                </form>
                <p>{this.state.result}</p>
            </div>
        );
    }
}
export default Gugudan;