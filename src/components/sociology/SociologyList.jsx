import React, { Component } from 'react';
import Sociology0 from '@/components/sociology0/Sociology0';
import Sociology1 from '@/components/sociology1/Sociology1';
import Sociology3 from '@/components/sociology3/Sociology3';
import api from '@/api/all';
import {PullToRefresh, Button} from 'antd-mobile';

class SociologyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        let page = 1
        let type = 2

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
                    htmlArr.push(<Sociology0 key={index} item={item}/>)
                    break;
                case 1:
                    htmlArr.push(<Sociology1 key={index} item={item}/>)
                    break;
                case 3:
                    htmlArr.push(<Sociology3 key={index} item={item}/>)
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

export default SociologyList
