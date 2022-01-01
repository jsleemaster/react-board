import React, { Component } from 'react';
//읽기 컨텐츠
// class ReadContent extends Component {
function ReadContent(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    );
}
export default ReadContent;