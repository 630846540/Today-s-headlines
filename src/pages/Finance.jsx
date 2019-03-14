import React, { Component } from 'react'
import FinanceList from '@/components/finance/FinanceList'

class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
            FinanceList: [],
        }
    }
    render () {
        return (
            <div className = "content">
                <FinanceList FinanceList = { this.state.FinanceList }/>
            </div>
        )
    }
}

export default Com
