import React, { Component } from 'react';
import Military0 from '@/components/military0/Military0';
import Military1 from '@/components/military1/Military1';
import Military3 from '@/components/military3/Military3';
import api from '@/api/all';
import {PullToRefresh, Button} from 'antd-mobile';

class MilitaryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        let page = 1
        let type = 4

        api.requestData(page,type).then(data => {
            // console.log(data)
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
                    htmlArr.push(<Military0 key={index} item={item}/>)
                    break;
                case 1:
                    htmlArr.push(<Military1 key={index} item={item}/>)
                    break;
                case 3:
                    htmlArr.push(<Military3 key={index} item={item}/>)
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

export default MilitaryList
