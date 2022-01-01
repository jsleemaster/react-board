import React, { Component } from 'react';
//제목
// class Subject extends Component {
function Subject(props) {
    return (
        <header>
            <h1><a href="/" onClick={
                (e) => {
                    e.preventDefault();
                    props.onChangePage();
                }
            }>{props.title}</a></h1>
            <p>{props.sub}</p>
        </header>
    );
}

export default Subject;