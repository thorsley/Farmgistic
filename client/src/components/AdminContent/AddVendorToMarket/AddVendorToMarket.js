import React from './node_modules/react';


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
            <div>
                <p>Table of vendors with a button to add to Admin's Market</p>
            </div>
        )
    }
}

export default AddVendorToMarket;