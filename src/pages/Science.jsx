import React, { Component } from 'react'
import ScienceList from '@/components/science/ScienceList'

class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
            ScienceList: [],
        }
    }
    render () {
        return (
            <div className = "content">
                <ScienceList ScienceList = { this.state.ScienceList }/>
            </div>
        )
    }
}

export default Com
