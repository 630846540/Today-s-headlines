import React, {Component} from 'react';
import './style.scss';

class Sports3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item:{}
        }
    }
    componentWillMount() {
        //console.log(this.props);
        console.log(this.props.item.id);
        this.setState({
            item: this.props.item
        })
    }
    render() {
        return (
            <div className="sports3">
                <h3>{this.state.item.title}</h3>
                <ul>
                    <li><img src={this.state.item.image_list[0]}/></li>
                    <li><img src={this.state.item.image_list[1]}/></li>
                    <li><img src={this.state.item.image_list[2]}/></li>
                </ul>
            </div>
        )
    }
}


export default Sports3

