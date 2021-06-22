import React, { Component } from 'react';
//Update Content
class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e) {
        this.setState({
            //자바스크립트 최신 문법
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h1>Update</h1>
                <form action="" method="post" onSubmit={function (e) {
                    e.preventDefault();
                    this.props.onSubmit(
                        this.state.id,
                        this.state.title,
                        this.state.desc
                    );
                }.bind(this)}>
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <input
                        onChange={this.inputFormHandler}
                        type="text"
                        name="title"
                        placeholder='title'
                        value={this.state.title}
                    ></input>
                    <textarea
                        onChange={this.inputFormHandler}
                        name="desc"
                        placeholder="desc"
                        value={this.state.desc}
                    ></textarea>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}
export default UpdateContent;