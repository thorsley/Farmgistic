import React from "react";

import { Modal, Button } from 'antd';

class ABModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ...this.props,
      visible: false,
      activity: "",
      type: ""
    }
  }
  // state = { visible: false };
  componentWillMount() {
    fetch('http://www.boredapi.com/api/activity/')
    .then ( (res) => res.json())
    .then ( json => {
        console.log(json)
      this.setState({
        activity: json.activity,
        type: json.type,
        accessibility: json.accessibility,
      })
    }).catch(error => console.error('Error:', error))
}

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button style={{border: "transparent"}} type="primary" onClick={this.showModal}>
          AB
        </Button>
        <Modal
          style={{zIndex: '2', alignContent: 'center', color: '#C9E3EE', borderRadius: '3%', backgroundColor: '#656614', marginTop: '-50em',marginLeft: '20em',padding: '6em 9em'}}
          title="Are you Bored?"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText={`I'm not that bored`}
          okText={`Let's get ${this.state.type}!`}
          closable={false}
        >
          <br />
          <p>Do you enjoy {this.state.type} activites?</p>
          <br />
          <p>How about you {this.state.activity}!</p>
          <br />
          <p>Would you agree that this activity is {100* this.state.accessibility}% accessible?</p>
          <br />
        </Modal>
      </div>
    );
  }
}


export default ABModal;