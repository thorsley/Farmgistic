import React from "react";
import styled from "styled-components";

const Grid = styled.div`
 develop
  border-radius: 2%;
`;

const Row = styled.div`
  margin: 2%;
  display: flex;
  // border: 2px solid black;
  // background-color:#E5ED9C;
`;

const Col = styled.div`
  padding-top: 2%;
  flex: 1;
  background-color: #656614;
  color: #c9e3ee;
  height: 100px;
  width: 100px;
  margin: 2%;
  border-radius: 10%;
`;

class PlotVendors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booths: [],
    };
  }

  componentWillMount() {

    fetch("https://dcb-market-server.herokuapp.com/booth/", {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        Authorization: localStorage.token,
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
        {/* Market ID: {this.props.marketID} - Market Size: {this.props.marketSize} */}
        <br />
        <Grid>
          <Row>
            <Col>{this.state.booths.length ? this.state.booths[0].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[1].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[2].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[3].farmName : null}</Col>
          </Row>
          <Row>
            <Col>{this.state.booths.length ? this.state.booths[4].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[5].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[6].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[7].farmName : null}</Col>
          </Row>
          <Row>
            <Col>{this.state.booths.length ? this.state.booths[8].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[9].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[10].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[11].farmName : null}</Col>
          </Row>
          <Row>
            <Col>{this.state.booths.length ? this.state.booths[12].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[13].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[14].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[15].farmName : null}</Col>
          </Row>
          <Row>
            <Col>{this.state.booths.length ? this.state.booths[16].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[17].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[18].farmName : null}</Col>
            <Col>{this.state.booths.length ? this.state.booths[19].farmName : null}</Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

export default PlotVendors;
