import React, {Component} from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';

// const Part0 = ({item }) => (
//     <div className = "part0">
//         <h3>{item.title}</h3>
//         <span>{ item.source }</span>
//         <span>评论</span>
//         <span>115</span>
//         <span>1小时前</span>
//     </div>
// )
class Part0 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {}
        }
    }

    componentWillMount() {
        // console.log(props);
        // console.log(this.props.item.id);
        this.setState({
            item: this.props.item
        })
    }

    render() {
        return (
            <NavLink className="part0" to= {"/part0Detail/"+ this.props.item.id}>
                <h3>{this.state.item.title}</h3>
                <span>{this.state.item.media_name}</span>
                <span>评论</span>
                <span>{this.state.item.comment_count}</span>
                <span>{this.state.item.time}</span>
            </NavLink>
        )
    }
}

export default Part0