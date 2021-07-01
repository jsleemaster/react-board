import React, { Component } from 'react';
//제목
class Control extends Component {
    render() {
        return (
            <ul>
                <li><a href="" onClick={
                    (e) => {
                        e.preventDefault();
                        this.props.onChangeMode('create');
                    }}>Create</a></li>
                <li><a href="" onClick={
                    (e) => {
                        e.preventDefault();
                        this.props.onChangeMode('update');
                    }}>Update</a></li>
                <li><input onClick={
                    (e) => {
                        e.preventDefault();
                        this.props.onChangeMode('delete');
                    }} type="button" value="Delete"></input></li>
            </ul>
        );
    }
}

export default Control;