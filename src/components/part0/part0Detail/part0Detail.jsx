import React, {Component} from 'react';
import './style.scss';
import api from '@/api/part0Detail'
import Connt from '@/components/Connt'

class Com extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.match.params.id);
        this.state = {
            list: [],
            hot : []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        api.requestDetailData(id).then(data => {
            //console.log(data);
            this.setState({
                list: data[0],
                hot : data.hot_list
            })
        })
    }

    render() {
        let arr = []
        this.state.hot.map((item,index) =>{
            arr.push(<div key={ index }>
                <h3>{item.title}</h3>
                <img src={item.image_list[0]}/>
                <img src={item.image_list[1]}/>
                <img src={item.image_list[2]}/>

            </div>)
        })


        return (
            <div className="box">
                <h1>{ this.state.list.title }</h1>
                <div className="huan">
                    <img src={this.state.list.icon_img}/>
                    <span className=" hour">{this.state.list.detail_source}</span>
                    <div className="qiu">
                        <span>12小时前</span>
                        <span className="dian"></span>
                        <span>{this.state.list.count}评论</span>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html : this.state.list.content}} className="cet">
                    </div>

                <Connt p_id = {this.props.match.params.id}/>

                <div className="hot">
                    <span className="te">|</span>
                    <h3>热门推荐</h3>
                </div>


                <div className="gu">
                    { arr }
                </div>

            </div>
        )
    }
}

export default Com