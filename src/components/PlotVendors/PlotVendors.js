import React from './node_modules/react';

class PlotVendors extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            marketID: props.marketID
        }
    }
    render() {
        return (
            <div>{this.state.marketID}</div>
        )
    }
}

export default PlotVendors;