import React from 'react';
import DragnDrop from '../../dragndrop/DragnDrop';


class AddVendorToMarket extends React.Component {
    constructor(props) {
        super(props);
    }

    handleAdd = e => {
        
    }    


    render() {
        return (
            <div style={{gridArea: '1 / 4 / 2 / 7', marginRight: '3em'}}>
                {/* <br />
                <br />
                <h1 style={{backgroundColor: '#C9E3EE', color:'#656614', padding: '.4em', margin: '0 .5em', borderRadius: '.1em'}}>Available Booths</h1>
                <p>Table of vendors with a button to add to Admin's Market</p> */}
                <br />
                <br />
                <h1 style={{backgroundColor: '#C9E3EE', color:'#656614', padding: '.4em', margin: '0 .5em', borderRadius: '.1em'}}>Market Mapper</h1>
                <br />
                <p style={{color: '#E5ED9C'}}>Drag and drop booths from the table on the left, to the columns on the right!</p>
                <DragnDrop />
                <br />
                <button style={{borderRadius: '.3em', color: '#C9E3EE', backgroundColor: '#656614'}}>Save Market Layout</button>
            </div>
        )
    }
}

export default AddVendorToMarket;