import React, { Component } from 'react';
//제목
class Control extends Component {
    render() {
        return (
            <ul>
                <li><a href="" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}>Create</a></li>
                <li><a href="" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>Update</a></li>
                <li><input onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)} type="button" value="Delete"></input></li>
            </ul>
        );
    }
}

export default Control;