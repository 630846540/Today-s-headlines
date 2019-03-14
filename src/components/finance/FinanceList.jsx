import React, { Component } from 'react';
import Finace0 from '@/components/finace0/Finace0';
import Finace1 from '@/components/finace1/Finace1';
import Finace3 from '@/components/finace3/Finace3';
import api from '@/api/all';

class FinanceList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        let page = 1
        let type = 7

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
                    htmlArr.push(<Finace0 key={index} item={item}/>)
                    break;
                case 1:
                    htmlArr.push(<Finace1 key={index} item={item}/>)
                    break;
                case 3:
                    htmlArr.push(<Finace3 key={index} item={item}/>)
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

export default FinanceList
