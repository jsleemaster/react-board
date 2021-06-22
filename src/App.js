import React, { Component } from 'react';
import Subject from "./components/Subject";
import Control from "./components/Control";
import Nav from "./components/Nav";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import './App.css';

class App extends Component {
  //초기 state 설정
  constructor(props) {
    super(props);
    this.max_content_id = 3;
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

  getReadContent() {
    var i;
    for (i = 0; i < this.state.contents.length; i++) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_id) {
        return data;
      }
    }
  }
  //컨텐츠
  getContent() {
    //state 값이 바뀌면 렌더함수가 재호출 된다.
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode === "create") {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        //add Create Content
        // push는 직접적으로 데이터를 추가함 (원본을 변경시킴)
        // push를 쓰고 싶다면 
        // 1. var result = Array.from(this.state.contents) 를 이용해 result에 push하면 된다.
        // 2. var result = Object.assign({id :~ , title : ~ , desc : ~},this.state.contents)를 이용해도 된다
        // concat은 간접적으로 데이터를 결합시킴 (퍼포먼스적으로 더 효율적 , 원본을 변경하지 않음 그래서 값을 저장해야함)
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.contents.concat(
          { id: this.max_content_id, title: _title, desc: _desc }
        )
        this.setState({
          contents: _contents,
          mode: "read",
          selected_id: this.max_content_id
        })
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
      _article = <UpdateContent data={this.getReadContent()} onSubmit={function (_id, _title, _desc) {
        //updateContent
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while (i < _contents.length) {
          if (_contents[i].id === _id) {
            _contents[i] = { id: _id, title: _title, desc: _desc }
            break;
          }
          i = i + 1;
        }
        this.setState({
          contents: _contents,
          mode: "read"
        })
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render() {
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
              if (_mode === "delete") {
                if (window.confirm('삭제하시겠습니까?')) {
                  var _contents = Array.from(this.state.contents);
                  var i = 0;
                  while (i < _contents.length) {
                    if (_contents[i].id === this.state.selected_id) {
                      _contents.splice(i, 1);
                      break;
                    }
                    i = i + 1;
                  }
                  this.setState({
                    mode: 'welcome',
                    contents: _contents
                  });
                  alert('delete');
                }
              } else {
                this.setState({
                  mode: _mode
                })
              }
            }.bind(this)
          }
        ></Control>
        {this.getContent()}
      </div >
    )
  }
}

export default App;
