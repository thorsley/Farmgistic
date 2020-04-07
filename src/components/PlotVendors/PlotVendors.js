import React from 'react';

class PlotVendors extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>Market ID: {this.props.marketID} - Market Size: {this.props.marketSize}</div>
        )
    }
}

export default PlotVendors;