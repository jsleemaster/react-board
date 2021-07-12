import React ,{Component} from 'react';
class Try extends Component {
    render(){
        return(
            <li><b>{this.props.value.title}</b> : {this.props.value.taste} 인덱스 값 : {this.props.i}
            </li>
        )
    }
}
export default Try