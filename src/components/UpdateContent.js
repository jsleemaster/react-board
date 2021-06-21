import React, { Component } from 'react';
//Update Content
class CreateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e) {
        this.setState = ({
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
                        e.target.title.value,
                        e.target.desc.value
                    );
                }.bind(this)}>
                    <input
                        type="text"
                        name="title"
                        placeholder='title'
                        value={this.state.title}
                        onChange={this.inputFormHandler}
                    ></input>
                    <textarea
                        name="desc"
                        placeholder="desc"
                        value={this.state.desc}
                        onChange={this.inputFormHandler}
                    ></textarea>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}
export default CreateContent;