import React from "react";
import styled from 'styled-components';

const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
background-color: #C9E3EE;
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
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2Nzg3OTY3LCJleHAiOjE1ODY4NzQzNjd9.zSIEvfm8OiJVciBG3cbwyfPeAlchlSYOiDe-ytYjK74'
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
        <Container>
        { 
        this.state.booths.map(booth => (
          <p style={{height: '100px', width: '100px', gridArea: `${booth.id}/${booth.id}/6/5`, border: '1px dotted #656614'}}>{booth.farmName} ! </p>
        ))}
        </Container>
      </div>
    );
  }
}

export default PlotVendors;