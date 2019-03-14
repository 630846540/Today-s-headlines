import React, { Component } from 'react'
import HotList from '@/components/hot/hotList'

class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hotList: [],
        }
    }
    render () {
        return (
            <div className = "content">
                <HotList hotList = { this.state.hotList }/>
            </div>
        )
    }
}

export default Com
