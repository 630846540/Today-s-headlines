import React, {Component} from 'react';
import './cont.scss';
import api from '@/api/connt';

class Connt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            contents: []
        }
    }

    componentDidMount() {
        let id = this.props.p_id
        api.requestDetailData(id).then(data => {
           // console.log(data);
            this.setState({
                contents : data.comments_list
            })
        })
    }

    write() {
        let new_id = this.props.p_id
        let comments = this.refs.conet.value;
        //console.log(new_id, comments);
        this.refs.conet.value = '';

        api.requestCommentData(new_id, comments).then(data => {
            console.log(data);

            api.requestDetailData(new_id).then(data => {
                this.setState({
                    content: this.refs.conet.value,
                    contents: data.comments_list
                })
            })
        })
    }

    render() {
        let arr = []
        this.state.contents.map((item,index) => {
            arr.push(
                <div key={ index }>
                    <img
                        src="http://s3.pstatp.com/toutiao/resource/toutiao_web/static/style/image/newindex/default40_c78f50e.png"
                        className="iimg"/>
                    <span>{item.user_name}</span>
                    <span className="pa">{item.add_time}</span>
                    <p>{item.comments}</p>
                </div>
            )
        })



        return (
            <div className="ping">
                <img
                    src="http://s3.pstatp.com/toutiao/resource/toutiao_web/static/style/image/newindex/default40_c78f50e.png"/>
                <textarea className="txta" ref="conet"></textarea>
                <input type="submit" value="评论" className="sub" onClick={this.write.bind(this)}/>
                <div className='lun'>
                    { arr }
                </div>

            </div>
        )
    }
}

export default Connt