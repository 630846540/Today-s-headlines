import React, {Component} from 'react';
import './style.scss';
import api from '@/api/videoDetail';
import Comment from '@/components/Comment';

class Com extends Component {
    constructor(props){
        super(props)
        this.state = {
            flag: false,
           list : [],
           itm : [],
        }
    }
    componentDidMount() {
        //console.log(this.props.match.params.id);
        let id = this.props.match.params.id
        api.requestDetailData(id).then(data => {
            console.log(data);
            this.setState({
                list : data[0],
                itm : data.hot_list,
            })
        })
    }

    change = (r) => {
    let flag = this.state.flag
        this.setState({
            flag : !flag
        })
        console.log(r);
    }

    render() {
        let Arr = []
        this.state.itm.map((item,index) => {
            Arr.push( <div className="list-content">
                <img src={item.image}/>
                <h5>04:19</h5>
                <p>{item.title}</p>
            </div>)
        })

        return (
            <div className="main">
                <div className="view">
                    <video src={this.state.list.video_img}  controls="controls" x-webkit-airplay="true" webkit-playsinline="true"></video>
                    {/*<img src={require('../../layout/images/bofang1.svg')} className="imgsss"/>*/}
                    <div className="video-header" style={{ display:this.state.flag ?'block':'none' }}>
                        <div className="video-info">
                            <div className="info-title">
                                <h1>{this.state.list.title }</h1>
                                <img  src={'//s1.pstatp.com/growth/video_mobile_detail/image/vwap-triangle@3x.zd9Tmgqu.png'}
                                      className='te' onClick={ this.change.bind(this,true) }/>
                            </div>
                            <div className="info-detail">
                                <div className="dance">{this.state.list.title }</div>
                                <span className="sp">{this.state.list.count}次观看</span>
                            </div>
                        </div>
                        <div className='video-author'>
                            <img src={this.state.list.avatar_url} className="imgg"/>
                            <span className="sa">{this.state.list.source}</span>
                            <span className="sn">关注作者</span>
                        </div>
                    </div>
                </div>

                <div className="fat" style={{ display:this.state.flag? 'none':'block' }}>
                    <h1>{this.state.list.title}</h1>
                    <img  src={'//s1.pstatp.com/growth/video_mobile_detail/image/vwap-triangle@3x.zd9Tmgqu.png'}
                          className='tee'  onClick={ this.change.bind(this,false) }/>
                </div>

                <h4>评论</h4>

                <Comment v_id = {this.props.match.params.id}/>

                <div className="hhh">
                    <h3>热门推荐</h3>
                </div>
                <div className='tt'>
                    { Arr }
                </div>
            </div>
        )
    }
}



export default Com
