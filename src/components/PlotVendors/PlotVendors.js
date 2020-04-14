import React from "react";
import styled from 'styled-components';

const Grid = styled.div`
  background-color: #C9E3EE;
  border: 3px inset #E5ED9C;
  border-radius: 2%;
`;

const Row = styled.div`
  margin: 1em;
  display: flex;
  // border: 2px solid black;
  // background-color:#E5ED9C;
`;

const Col = styled.div`
  padding-top: 2em;
  flex: 1;
  background-color: #656614;
  color: #C9E3EE;
  height: 100px;
  width: 100px;
  margin: 2px;
  border-radius: 10%;
`;

class PlotVendors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booths: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:3003/booth/', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2ODc0NDE1LCJleHAiOjE1ODY5NjA4MTV9.v_2HPwpnV1N9ijY7T8oVB_tan534CbIGBMTS-i9WzHI'
            // 'Authorization': props.token
        })
    }).then ( (res) => res.json())
    .then ( (data) => {
      this.state.booths = data
      console.log(this.state);
      // console.log(this.state[0].farmName)
    }).catch(error => console.error('Error:', error))
  }


  render() {
    return (
      <div>
        Market ID: {this.props.marketID} - Market Size: {this.props.marketSize}
        <br />
        <Grid>
          <Row>
            <Col>{this.state.booths.length ? this.state.booths[0].farmName : <span>Everything</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[1].farmName : <span>is</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[2].farmName : <span>in</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[3].farmName : <span>alignment</span>}</Col>
          </Row>
          <Row>
            <Col>{this.state.booths.length ? this.state.booths[4].farmName : <span>Can</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[5].farmName : <span>you</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[6].farmName : <span>see</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[7].farmName : <span>through</span>}</Col>
          </Row>
          <Row>
            <Col>{this.state.booths.length ? this.state.booths[8].farmName : <span>?</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[9].farmName : <span>?</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[10].farmName : <span>?</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[11].farmName : <span>?</span>}</Col>
          </Row>
          <Row>
            <Col>{this.state.booths.length ? this.state.booths[12].farmName : <span>Yes</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[13].farmName : <span>it</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[14].farmName : <span>is</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[15].farmName : <span>true</span>}</Col>
          </Row>
          <Row>
            <Col>{this.state.booths.length ? this.state.booths[16].farmName : <span>your</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[17].farmName : <span>mapped</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[18].farmName : <span>booths</span>}</Col>
            <Col>{this.state.booths.length ? this.state.booths[19].farmName : <span>view</span>}</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PlotVendors;