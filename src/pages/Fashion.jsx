import React, { Component } from 'react'
import FashionList from '@/components/fashion/FashionList'

class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
            FashionList: [],
        }
    }
    render () {
        return (
            <div className = "content">
                <FashionList FashionList = { this.state.FashionList }/>
            </div>
        )
    }
}

export default Com
