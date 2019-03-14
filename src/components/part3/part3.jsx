import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './style3.scss';

// const Part3 = ({item}) => (
//     <div className ="part3" onClick={this.change}>
//         <h3>{item.title}</h3>
//         <ul>
//             <li><img src ={item.image_list[0].url}/></li>
//             <li><img src={item.image_list[1].url}/></li>
//             <li><img src={item.image_list[2].url}/></li>
//         </ul>
//     </div>
// )

class Part3 extends Component {
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
            <NavLink className="part3" to={"/part3Detail/"+ this.props.item.id}>
                <h3>{this.state.item.title}</h3>
                <ul>
                    <li><img src={this.state.item.image_list[0]}/></li>
                    <li><img src={this.state.item.image_list[1]}/></li>
                    <li><img src={this.state.item.image_list[2]}/></li>
                </ul>
            </NavLink>
        )
    }
}


export default Part3






