import React, { Component } from 'react'
import SportsList from '@/components/sports/SportsList'

class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
            SportsList: [],
        }
    }
    render () {
        return (
            <div className = "content">
                <SportsList SportsList = { this.state.SportsList }/>
            </div>
        )
    }
}

export default Com
