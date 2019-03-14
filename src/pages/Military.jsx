import React, { Component } from 'react'
import MilitaryList from '@/components/military/MilitaryList'

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
                <MilitaryList MilitaryList = { this.state.MilitaryList }/>
            </div>
        )
    }
}

export default Com
