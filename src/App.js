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
      mode: "welcome",
      subject: { title: 'Web', sub: 'Wolrd Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello React!' },
      contents: [
        { id: 1, title: "Html", desc: 'Html is Information' },
        { id: 2, title: "Css", desc: 'Css is amazing' },
        { id: 3, title: "Javscript", desc: 'Javscript is Good' }
      ]
    }
  }
  render() {
    //state 값이 바뀌면 렌더함수가 재호출 된다.
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function (e) {
            //a 태그의 본 기능을 막는 이벤트
            e.preventDefault();
          }}>{this.state.subject.title}</a></h1>
          <p>{this.state.subject.sub}</p>
        </header>
        <Nav data={this.state.contents}></Nav>
        <Contents title={_title} desc={_desc}></Contents>
      </div>
    )
  }
}

export default App;
