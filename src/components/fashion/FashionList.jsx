import React, { Component } from 'react';
import Fashion0 from '@/components/fashion0/Fashion0';
import Fashion1 from '@/components/fashion1/Fashion1';
import Fashion3 from '@/components/fashion3/Fashion3';
import api from '@/api/all';

class FashionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        let page = 1
        let type = 9

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
                    htmlArr.push(<Fashion0 key={index} item={item}/>)
                    break;
                case 1:
                    htmlArr.push(<Fashion1 key={index} item={item}/>)
                    break;
                case 3:
                    htmlArr.push(<Fashion3 key={index} item={item}/>)
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

export default FashionList
