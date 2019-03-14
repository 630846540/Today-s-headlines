import React, { Component } from 'react'
import SociologyList from '@/components/sociology/SociologyList'

class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
            SociologyList : [],
        }
    }
    render () {
        return (
            <div className = "content">
                <SociologyList SociologyList = { this.state.SociologyList }/>
            </div>
        )
    }
}

export default Com
