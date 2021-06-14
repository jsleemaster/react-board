import React, { Component } from 'react';
import Subject from "./components/Subject";
import Nav from "./components/Nav";
import Contents from "./components/Contents";
import './App.css';

class App extends Component {
  //초기 state 설정
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'Web', sub: 'Wolrd Wide Web!' },
      contents: [
        { id: 1, title: "Html", desc: 'Html is Information' },
        { id: 2, title: "Css", desc: 'Css is amazing' },
        { id: 3, title: "Javscript", desc: 'Javscript is Good' }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Nav data={this.state.contents}></Nav>
        <Contents title="Html" desc="Html 에 관한 내용입니다."></Contents>
        <Contents title="Css" desc="Css에 관한 내용입니다"></Contents>
        <Contents title="Js" desc="Js에 관한 내용입니다"></Contents>
      </div>
    )
  }
}

export default App;
