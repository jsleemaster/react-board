import React, { Component } from 'react';
import Subject from "./components/Subject";
import Control from "./components/Control";
import Nav from "./components/Nav";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import './App.css';

class App extends Component {
  //초기 state 설정
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selected_id: 1,
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
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var i;
      for (i = 0; i < this.state.contents.length; i++) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_id) {
          _title = data.title;
          _desc = data.desc;
        }
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>
      }
    } else if (this.state.mode === "create") {
      _article = <CreateContent></CreateContent>
    }
    return (
      <div className="App">

        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={
            function () {
              this.setState({
                mode: "welcome"
              });
            }.bind(this)}
        ></Subject>
        <Nav
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_id: Number(id)
            });
          }.bind(this)}
        ></Nav>
        <Control
          onChangeMode={
            function (_mode) {
              this.setState({
                mode: _mode
              })
            }.bind(this)
          }
        ></Control>
        {_article}
      </div >
    )
  }
}

export default App;
