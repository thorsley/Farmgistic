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

    shouldComponentUpdate() {
        console.log('fetching..')
        fetch('http://localhost:3003/market/add/', {
            method: 'POST',
            // body: JSON.stringify( {marketName: marketName, address: address, size: size}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg1NjcwNjI5LCJleHAiOjE1ODU3NTcwMjl9.Z5U0QP6lkRygszWo_kE-XwmWuocokt6I2cim5dKqc9k'
                // 'Authorization': props.token
            })
        }).then ( (res) => res.json())
        .then ( (logData) => {
            console.log(logData);
            this.setState({
                marketName: this.marketName,
                address: this.address,
                size: this.size
            })
        })
    }
    render() {
        return (
            <>
                <h3>Create a Market</h3>
                {/* <Form onSubmit={handleSubmit}> */}
                <Form>
                <FormGroup>
                        <Label htmlFor="marketName" />
                        <Input name="marketName" value={this.marketName} onSubmit={(e) => this.setState(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="address" />
                        <Input name="address" value={this.address} onSubmit={(e) => this.setState(e.target.value)} >
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="size" />
                        <Input name="size" value={this.size} onSubmit={(e) => this.setState(e.target.value)} />
                    </FormGroup>
                    <Button type="submit">Click to Submit</Button>
                </Form>
            </>
        )
    }
}

export default CreateMarket;