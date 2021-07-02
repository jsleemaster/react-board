import React, { Component } from 'react';
//읽기 컨텐츠
class GuGudan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: Math.ceil(Math.random() * 9),
            seconde: Math.ceil(Math.random() * 9),
            value: '',
            result: ''
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.first} 곱하기 {this.state.seconde}</h1>
                <form>
                    <input type="number" value={this.state.value} onChange={(e) => {
                        e.preventDefault();
                        this.setState({
                            value: e.target.value
                        });
                    }}></input>
                    <button>입력!</button>
                </form>
                <p>{this.state.result}</p>
            </div>
        );
    }
}
export default GuGudan;