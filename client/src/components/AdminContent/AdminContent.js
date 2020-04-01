import React from 'react';
import AddVendorToMarket from './AddVendorToMarket/AddVendorToMarket';
import CreateMarket from '../Market/CreateMarket/CreateMarket';


class VendorContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    
    render () {
    return (
        <div>
            <p>CreateMarket, AddVendorToMarket, and PlotMarket</p>
            <CreateMarket />
            <AddVendorToMarket />
        </div>
    )}
}

export default VendorContent;