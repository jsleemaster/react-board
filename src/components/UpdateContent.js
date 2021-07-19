import React, { PureComponent } from 'react';
//PureComponet === shouldcomponetupdate 를 구현 해놓은 것
//PureComponet 는 object, array 등 참조변수들이 변하는 것은 구분을 잘 못함. (단점)
//PureComponet deepCopy를 하면 구분은 함
//Update Content
class UpdateContent extends PureComponent {
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
                <form action="" method="post" onSubmit={
                    (e) => {
                        e.preventDefault();
                        this.props.onSubmit(
                            this.state.id,
                            this.state.title,
                            this.state.desc
                        );
                    }}>
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