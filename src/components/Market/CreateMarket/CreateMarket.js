import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreateMarket extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            marketName:"",
            address:"",
            size:""
        };
    }
    handleMarketName = e => {
        this.setState({ marketName: e.target.value})
    }
    handleAddress = e => {
        this.setState({address: e.target.value})
    }
    handleSize = e => {
        this.setState({size: e.target.value})
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log("Market Name: ", this.state.marketName)
        console.log("Address: ", this.state.address)
        console.log("Size: ", this.state.size)
        fetch('http://localhost:3003/market/add/', {
            method: 'POST',
            body: JSON.stringify( {marketName: this.state.marketName, address: this.state.address, size: this.state.size}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg1NzYzNDYxLCJleHAiOjE1ODU4NDk4NjF9.PCJPloDEWSsMahnTyw6Ip4U6Ewq8VNuly7SVvX1IEwY'
                // 'Authorization': props.token
            })
        }).then ( (res) => res.json())
        .then ( (logData) => {
            console.log(logData);
            this.setState({
                marketName: this.state.marketName,
                address: this.state.address,
                size: this.state.size
            })
        }).catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response)); 
    }
    render() {
        return (
            <>
                <h3>Create a Market</h3>
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                        <Label htmlFor="marketName" />
                        <Input name="marketName" type="text" value={this.marketName} onChange={this.handleMarketName} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="address" />
                        <Input type="text" name="address" value={this.address} onChange={this.handleAddress} >
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="size" />
                        <Input type="text" name="size" value={this.size} onChange={this.handleSize} />
                    </FormGroup>
                    <Button type="submit">Click to Submit</Button>
                </Form>
            </>
        )
    }
}

export default CreateMarket;