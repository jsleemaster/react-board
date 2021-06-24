import React, { Component } from 'react';
//함수형으로 변환
// class Square extends React.Component {
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() =>
//                     this.props.onClick()
//                 }
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }
function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}
export default Square;