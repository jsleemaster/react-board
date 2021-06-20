import React, { Component } from 'react';
//Create Content
class CreateContent extends Component {
    render() {
        console.log(this.props.data);
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
                    <input type="text" name="title" placeholder='title'></input>
                    <textarea name="desc" placeholder="desc"></textarea>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}
export default CreateContent;