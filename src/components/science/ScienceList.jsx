import React, { Component } from 'react';
import Science0 from '@/components/science0/Science0';
import Science1 from '@/components/science1/Science1';
import Science3 from '@/components/science3/Science3';
import api from '@/api/all';
import {PullToRefresh, Button} from 'antd-mobile';

class ScienceList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        let page = 1
        let type = 5

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
                    htmlArr.push(<Science0 key={index} item={item}/>)
                    break;
                case 1:
                    htmlArr.push(<Science1 key={index} item={item}/>)
                    break;
                case 3:
                    htmlArr.push(<Science3 key={index} item={item}/>)
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

export default ScienceList
