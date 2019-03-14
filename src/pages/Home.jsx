import React, { Component } from 'react'
import List from '@/components/home/List'

class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [],
        }
    }


    render () {
        return (
            <div className = "content">
                <List list = { this.state.list }/>
            </div>
        )
    }

}

export default Com
