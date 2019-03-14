import React,{ Component } from 'react';
import './style.scss';

class Finace1 extends Component {
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
            <div className="finace1">
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

            </div>
        )
    }
}


export default Finace1