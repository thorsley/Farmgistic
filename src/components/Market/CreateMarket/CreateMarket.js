import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class CreateMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marketName: "",
      address: "",
      size: "",
    };
  }
  handleMarketName = (e) => {
    this.setState({ marketName: e.target.value });
  };
  handleAddress = (e) => {
    this.setState({ address: e.target.value });
  };
  handleSize = (e) => {
    this.setState({ size: e.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Market Name: ", this.state.marketName);
    console.log("Address: ", this.state.address);
    console.log("Size: ", this.state.size);
    fetch("https://dcb-market-server.herokuapp.com/market/add/", {
      method: "POST",
      body: JSON.stringify({
        marketName: this.state.marketName,
        address: this.state.address,
        size: this.state.size,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.token,
        // 'Authorization': props.token
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        this.setState({
          marketName: this.state.marketName,
          address: this.state.address,
          size: this.state.size,
        });
      })
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };
  render() {
    return (
      <div style={{gridArea: '1 / 1 / 2 / 3', marginRight: '3em'}}>
                <br />
                <br />
                <h1 style={{backgroundColor: '#C9E3EE', color:'#656614', padding: '.4em', margin: '0 .5em', borderRadius: '.1em'}}>Create a Market</h1>
                <br />
                <br />
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                        <Label style={{color:'#E5ED9C'}} htmlFor="marketName">Name:</Label>
                        <Input 
                        style={{backgroundColor: '#ECECEC', border: '.2em inset #E5ED9C', borderRadius: '.3em'}}
                        name="marketName" 
                        placeholder="Downtown Winter Market"
                        type="text" 
                        value={this.marketName} 
                        onChange={this.handleMarketName} />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Label style={{color:'#E5ED9C'}} htmlFor="address">Address:</Label>
                        <Input 
                        style={{backgroundColor: '#ECECEC', border: '.2em inset #E5ED9C', borderRadius: '.3em'}}
                        type="text" 
                        name="address" 
                        placeholder="563 West Sunshine Blvd."
                        value={this.address} 
                        onChange={this.handleAddress} >
                        </Input>
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Label style={{color:'#E5ED9C'}} htmlFor="size">Size:</Label>
                        <Input 
                        style={{backgroundColor: '#ECECEC', border: '.2em inset #E5ED9C', borderRadius: '.3em'}}
                        type="text" 
                        name="size" 
                        placeholder="4 x 5"
                        value={this.size} 
                        onChange={this.handleSize} />
                    </FormGroup>
                    <br />
                    <Button 
                    style={{borderRadius: '.3em', color: '#C9E3EE', backgroundColor: '#656614'}}
                    type="submit"
                    >Click to Submit</Button>
                </Form>
            </div>
    );
  }
}

export default CreateMarket;
