import React, { Component } from 'react';

//상단탭
class Nav extends Component {
  //shouldComponentUpdate를 쓰는 이유
  // 1.바뀐값이 있을 경우에만 render함수를 읽기 위해
  // 2.push를 이용한다면 기존 데이터인 this.props.data 값도 변경이 됨
  // 3.concat을 이용한다면 기존 데이터인 this.props.data 는 그대로고 newPros.data의 추가가 된다.
  shouldComponentUpdate(newPros, newProps) {

    //return false 인경우 render함수를 읽어오지 않는다.
    if (this.props.data === newPros.data) {
      return false;
    }
    return true;
  }
  render() {
    var lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={'/contents/' + data[i].id}
            //인자를 넘기는 방법 두가지
            //1.속성을 부여해서 인자를 넘기는 방법
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              //target은 갖고 있는 속성들을 확인 할 수 있다
              //target.dataset 에 data-가 갖고 있는 ex)id를 확인할 수 있다.
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          //2. bind에 추가해서 넘기는 방법

          // onClick={function (id, ex, e) {
          //   e.preventDefault(); 
          //   this.props.onChangePage(id);
          // }.bind(this, data[i].id , ex)}
          >{data[i].title}</a>
        </li >
      );
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