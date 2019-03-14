import React, { Component } from 'react';
import International0 from '@/components/international0/International0';
import International1 from '@/components/international1/International1';
import International3 from '@/components/international3/International3';
import api from '@/api/all';

class InternationalList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        let page = 1
        let type = 8

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
                    htmlArr.push(<International0 key={index} item={item}/>)
                    break;
                case 1:
                    htmlArr.push(<International1 key={index} item={item}/>)
                    break;
                case 3:
                    htmlArr.push(<International3 key={index} item={item}/>)
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

export default InternationalList
