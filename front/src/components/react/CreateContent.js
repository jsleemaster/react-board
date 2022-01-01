import React, { Component } from 'react';
//Create Content
class CreateContent extends Component {
    render() {
        return (
            <div>
                <h1>Create</h1>
                <form action="" method="post" onSubmit={
                    (e) => {
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                    }}>
                    <input type="text" name="title" placeholder='title'></input>
                    <textarea name="desc" placeholder="desc"></textarea>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}
export default CreateContent;