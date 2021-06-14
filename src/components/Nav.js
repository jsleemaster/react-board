import React, { Component } from 'react';

//상단탭
class Nav extends Component {

  render() {
    var lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(<li key={data[i].id}><a href={'/contents/' + data[i].id} > {data[i].title}</a></li >);
      i = i + 1;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default Nav;