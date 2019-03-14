import React, {Component} from 'react';
import './style.scss';

class Military0 extends Component {
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
            <div className="military0">
                <h3>{this.state.item.title}</h3>
                <span>{this.state.item.media_name}</span>
                <span>评论</span>
                <span>{this.state.item.comment_count}</span>
                <span>{this.state.item.time}</span>
            </div>
        )
    }
}

export default Military0