import React, { Component } from 'react';
//제목
class Subject extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                <p>{this.props.sub}</p>
            </header>
        );
    }
}

export default Subject;