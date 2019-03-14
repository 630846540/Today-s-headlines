import React,{ Component } from 'react';
import './style1.scss';
import { NavLink } from 'react-router-dom';

// const Part1 = ({part1}) => (
//     <div className="part1">
//         <div className = "_left">
//             <h3>二月初一是什么节？了解的人越来越少了</h3>
//             <span>光明日报</span>
//             <span>评论</span>
//             <span>13</span>
//         </div>
//         <img src="https://p3.pstatp.com/list/pgc-image/4a09c4bc7b4649b18e29943627309488"/>
//     </div>
// )
class Part1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item:{}
        }
    }
    componentWillMount() {
        // console.log(this.props);
        this.setState({
            item: this.props.item

        })
    }
    render() {
        // console.log(props);
        return (
            <NavLink className="part1" to={"/part1Detail/"+ this.state.item.id }>
                <div className ="spp">
                <h3>{this.state.item.title}</h3>
                <span>{this.state.item.media_name}</span>
                <span>评论</span>
                <span>{this.state.item.comment_count}</span>
                <span>{this.state.item.time}</span>
                </div>
                <ul>
                    <li><img src={this.state.item.image_list[0]}/></li>
                </ul>

            </NavLink>
        )
    }
}


export default Part1