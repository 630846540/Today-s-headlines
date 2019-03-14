import React, {Component} from 'react';
import api from '@/api/video';
import {NavLink} from 'react-router-dom';
import Part1 from "../components/home/List";
import {PullToRefresh, Button} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '@/main.scss';
import './style.scss';

class Com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            page: 1,
            refreshing: true,
            isLoading: true,
        }
    }

    componentDidMount() {
        api.requestVideoData(this.state.page).then(data => {
            //console.log(data.list[1].id);
            this.setState({
                list: data.list
            })

        })
    }

    render() {
        return (
            <div className='content'>

                <PullToRefresh
                    refreshing={this.state.refreshing}
                    direction={'up'}
                    onRefresh={() => {
                        console.log(this.state.page);
                        let page = this.state.page
                        this.setState({
                            refreshing: true,
                            page: page + 1
                        }, () => {

                            let shuaNew = document.getElementsByClassName('shuaNew')[0]
                            //console.log(shuaNew);
                            if(shuaNew.style.transform  == "rotate(720deg)"){
                                shuaNew.style.transform  = "";
                            }else {
                                shuaNew.style.transform  = "rotate(720deg)";
                            }
                            // console.log(this.state.page);
                            api.requestVideoData(this.state.page).then(data => {
                                //console.log(data.list[1].id);
                                let res = this.state.list
                                res = res.concat(data.list)
                                this.setState({
                                    list: res
                                })

                            })
                        });

                    }}>

                    {
                        this.state.list.map((item, index) => {
                            return (
                                <NavLink to={"/videoDetail/" + item.id} key={index}>
                                    <div className="video">
                                        <h3>{item.title}</h3>
                                        <img src={item.image}/>
                                        <img src={require('../layout/images/bofang.svg')} style={{
                                            width: "0.4rem",
                                            height: "0.4rem",
                                            color: "#333",
                                            position: "absolute",
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            top: 0,
                                                margin: "auto"
                                        }}/>
                                        <span>{item.media_name}</span>
                                        <span>评论</span>
                                        <span>{item.count}</span>
                                        <span>20分钟前</span>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </PullToRefresh>
            </div>

        )

    }
}

export default Com
