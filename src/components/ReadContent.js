import React, { Component } from 'react';
//읽기 컨텐츠
class ReadContent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}
export default ReadContent;