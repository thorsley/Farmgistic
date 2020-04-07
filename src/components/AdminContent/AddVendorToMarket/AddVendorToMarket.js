import React from 'react';


class AddVendorToMarket extends React.Component {
    constructor(props) {
        super(props);
    }

    handleAdd = e => {
        
    }

    componentDidMount() {
        fetch('http://localhost:3003/booth/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg1NzYzNDYxLCJleHAiOjE1ODU4NDk4NjF9.PCJPloDEWSsMahnTyw6Ip4U6Ewq8VNuly7SVvX1IEwY'
                // 'Authorization': props.token
            })
        }).then ( (res) => res.json())
        .then ( (data) => {
            console.log(data);
            
        }).catch(error => console.error('Error:', error))
    }
    


    render() {
        return (
            <div style={{gridArea: '1 / 4 / 2 / 7', marginRight: '3em'}}>
                <br />
                <br />
                <h1 style={{backgroundColor: '#C9E3EE', color:'#656614', padding: '.4em', margin: '0 .5em', borderRadius: '.1em'}}>Available Booths</h1>
                <p>Table of vendors with a button to add to Admin's Market</p>
                <br />
                <br />
                <h1 style={{backgroundColor: '#C9E3EE', color:'#656614', padding: '.4em', margin: '0 .5em', borderRadius: '.1em'}}>Market Mapper</h1>
                <p>Drag and drop booths from the table above, to the grid below!</p>
            </div>
        )
    }
}

export default AddVendorToMarket;