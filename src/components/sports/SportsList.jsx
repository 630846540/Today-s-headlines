import React, { Component } from 'react';
import Sports0 from '@/components/sports0/Sports0';
import Sports1 from '@/components/sports1/Sports1';
import Sports3 from '@/components/sports3/Sports3';
import api from '@/api/all';

class SportsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        let page = 1
        let type = 6

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
                    htmlArr.push(<Sports0 key={index} item={item}/>)
                    break;
                case 1:
                    htmlArr.push(<Sports1 key={index} item={item}/>)
                    break;
                case 3:
                    htmlArr.push(<Sports3 key={index} item={item}/>)
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

export default SportsList
