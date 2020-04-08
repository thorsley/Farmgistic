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
        <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridTemplateRows: '1fr',
            gridColumnGap: '0px',
            gridRowGap: '0px'}}
        >
            <CreateMarket />
            <AddVendorToMarket />
        </div>
    )}
}

export default VendorContent;