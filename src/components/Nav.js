import React, { Component } from 'react';

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

export default Nav;