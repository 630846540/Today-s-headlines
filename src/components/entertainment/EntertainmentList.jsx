import React, { Component } from 'react';
import Entertainment0 from '@/components/entertainment0/Entertainment0';
import Entertainment1 from '@/components/entertainment1/Entertainment1';
import Entertainment3 from '@/components/entertainment3/Entertainment3';
import api from '@/api/all';
import {PullToRefresh, Button} from 'antd-mobile';

class EntertainmentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        let page = 1
        let type = 3

        api.requestData(page,type).then(data => {
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
                    htmlArr.push(<Entertainment0 key={index} item={item}/>)
                    break;
                case 1:
                    htmlArr.push(<Entertainment1 key={index} item={item}/>)
                    break;
                case 3:
                    htmlArr.push(<Entertainment3 key={index} item={item}/>)
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

export default EntertainmentList
