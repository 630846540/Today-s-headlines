import React from 'react';
import Part0 from '@/components/part0/Part0'
import Part1 from "../part1/Part1";
import Part3 from "../part3/part3";
import api from '@/api/home';
import {PullToRefresh, Button} from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';
import './style.scss';

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            data: [],
            refreshing: true,
            isLoading: true,
        }
    }

    componentDidMount() {
        // const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        // setTimeout(() => this.setState({
        //     // height: hei,
        //     data: genData(),
        // }), 0);
        console.log(this.state.page);
        api.requestData(this.state.page).then(data => {
           // console.log(data)
            this.setState({
                data: data.list,
            })
        })
    }

    render() {
        return (
            <div className="list">
                <PullToRefresh
                    refreshing={this.state.refreshing}
                    direction={'up'}
                    onRefresh={() => {
                        //console.log(this.state.page);
                        let page = this.state.page
                        this.setState({
                            refreshing: true,
                            page: page + 1
                        }, () => {

                            // console.log(this.state.page);
                            let shuaNew = document.getElementsByClassName('shuaNew')[0]
                           //console.log(shuaNew);
                            if(shuaNew.style.transform  == "rotate(720deg)"){
                                shuaNew.style.transform  = "";
                            }else {
                                shuaNew.style.transform  = "rotate(720deg)";
                            }

                            api.requestData(this.state.page).then(data => {
                                // console.log(data.list)
                                let res = this.state.data
                                res = res.concat(data.list)
                               // console.log(res);
                                this.setState(
                                    {
                                        refreshing: false,
                                        data: res
                                    })
                            })
                        });

                    }}>

                    {
                        this.state.data.map((item, index) => {
                            let len = item.image_list ? item.image_list.length : 0;
                            switch (len) {
                                case 0:
                                    return (<Part0 key={index} item={item}/>)
                                case 1:
                                    return (<Part1 key={index} item={item}/>)
                                case 3:
                                    return (<Part3 key={index} item={item}/>)
                            }
                        })
                    }
                </PullToRefresh>
            </div>
        )
    }
}

export default List
