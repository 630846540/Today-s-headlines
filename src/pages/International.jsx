import React, { Component } from 'react'
import InternationalList from '@/components/international/InternationalList'

class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
            InternationalList: [],
        }
    }
    render () {
        return (
            <div className = "content">
                <InternationalList InternationalList = { this.state.InternationalList }/>
            </div>
        )
    }
}

export default Com
