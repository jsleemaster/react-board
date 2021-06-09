import React, { Component } from 'react';
import './App.css';

//제목
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>Web</h1>
      </header>
    );
  }
}
//상단탭
class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="">1.Html</a></li>
          <li><a href="">2.Css</a></li>
          <li><a href="">3.Js</a></li>
        </ul>
      </nav>
    );
  }
}
//html
class Html extends Component {
  render() {
    return (
      <div>
        <p>안녕하세요 Html에 관련된 내용입니다.</p>
      </div>
    );
  }
}
//css
class Css extends Component {
  render() {
    return (
      <div>
        <p>안녕하세요 Css에 관련된 내용입니다.</p>
      </div>
    );
  }
}
//js
class Js extends Component {
  render() {
    return (
      <div>
        <p>안녕하세요 Js에 관련된 내용입니다.</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <Nav></Nav>
        <Html></Html>
        <Css></Css>
        <Js></Js>
      </div>
    )
  }
}

export default App;
