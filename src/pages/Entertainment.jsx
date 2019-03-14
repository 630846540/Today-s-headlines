import React, { Component } from 'react'
import EntertainmentList from '@/components/entertainment/EntertainmentList'

class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
            EntertainmentList: [],
        }
    }
    render () {
        return (
            <div className = "content">
                <EntertainmentList EntertainmentList = { this.state.EntertainmentList }/>
            </div>
        )
    }
}

export default Com
