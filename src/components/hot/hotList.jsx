import React, { Component } from 'react';
import Hot0 from '@/components/hot0/Hot0';
import Hot1 from '@/components/hot1/Hot1';
import Hot3 from '@/components/hot3/Hot3';
import api from '@/api/all';
import {PullToRefresh, Button} from 'antd-mobile';

class hotList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        let page = 1
        let type = 1

        api.requestData(page,type).then(data => {
             console.log(data)
            this.setState({
                data: data.list,
            })
        })
    }

    render() {
                        let htmlArr = []
                        this.state.data.map((item, index) => {
                            let len = item.image_list ? item.image_list.length : 0;
                            switch (len) {
                                case 0:
                                    htmlArr.push(<Hot0 key={index} item={item}/>)
                                    break;
                                case 1:
                                    htmlArr.push(<Hot1 key={index} item={item}/>)
                                    break;
                                case 3:
                                    htmlArr.push(<Hot3 key={index} item={item}/>)
                                    break;
                            }
                        })
        return(
            <div className= "list">
                { htmlArr }
            </div>
        )
    }
}

export default hotList
