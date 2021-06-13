import React, { Component } from 'react';
import Subject from "./components/Subject";
import Nav from "./components/Nav";
import Contents from "./components/Contents";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="Web" sub="Wolrd Wide Web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <Nav></Nav>
        <Contents title="Html" desc="Html 에 관한 내용입니다."></Contents>
        <Contents title="Css" desc="Css에 관한 내용입니다"></Contents>
        <Contents title="Js" desc="Js에 관한 내용입니다"></Contents>
      </div>
    )
  }
}

export default App;
