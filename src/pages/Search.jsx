import React, {Component} from 'react';
import './search1.scss';
import api from '@/api/home'
import {NavLink} from 'react-router-dom';

class Com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            lists: [],
            page: 1,
            flag: false
        }
    }

    shou() {
        let page = 1
        let flag = this.state.flag
        // console.log(this.refs.txt.value);
        let keywords = this.refs.txt.value;
        let content = []
        let cont = []

        if(keywords === ''){
           this.setState({
               list : []
           })
        }else{
            for (let i = 1; i < 4; i++) {
                api.requestData(i, keywords).then(data => {
                    content = content.concat(data)
                    //console.log(content);
                    this.setState({
                        list: content,
                        flag: !flag
                    })
                })
            }
            for (let i = 1; i < 4; i++) {
                api.requestVideoData(i, keywords).then(data => {
                    // console.log(data)
                    cont = cont.concat(data)
                    this.setState({
                        lists: cont,
                        flag: !flag
                    })
                })
            }
        }

    }

    render() {
        let arr = []
        let len = 0;
            this.state.list.map((item, index) => {
                item.list.map((itm, inx) => {
                    len = itm.image_list ? itm.image_list.length : 0;
                    switch (len) {
                        case 0 :
                            arr.push(<NavLink to={'/part0Detail/' + itm.id}>
                                <h3>{itm.title}</h3>
                            </NavLink>)
                            break;
                        case 1 :
                            arr.push(<NavLink to={'/part1Detail/' + itm.id}>
                                <div className ="spp">
                                    <h3>{itm.title}</h3>
                                    <img src={itm.image_list[0]}/>
                                </div>

                            </NavLink>)
                            break;
                        case 3 :
                            arr.push(<NavLink to={'/part3Detail/' + itm.id}>
                                <h3>{itm.title}</h3>
                                <ul>
                                    <li><img src={itm.image_list[0]}/></li>
                                    <li><img src={itm.image_list[1]}/></li>
                                    <li><img src={itm.image_list[2]}/></li>
                                </ul>

                            </NavLink>)
                            break;
                    }
                })
            })

        let arrs = []
        this.state.lists.map((im, iex) => {
            console.log(im);
            im.list.map( tm => {
                arrs.push(<NavLink to={'/videoDetail/'+tm.id}>
                    <div className="video">
                        <h3>{tm.title}</h3>
                        <img src={tm.image}/>
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
                    </div>
                </NavLink>)
            })
        })

        return (
            <div className="zong">
                <form>
                    <div className="txt">
                        <div className="tet">
                            <input type="text" className="tett" ref='txt'/>
                        </div>
                        <div className="ttt">
                            <span onClick={this.shou.bind(this)}>搜索</span>
                        </div>
                    </div>
                </form>
                <div className="xing" style={{display: this.state.flag ? 'none' : 'block'}}>
                    <div className="qiu"></div>
                    <p>在这个星球中找不到</p>
                </div>

                <div className="biao">
                    {arr}
                    {arrs}
                </div>
            </div>
        )
    }
}

export default Com