import React from "react";
import { Modal, Button } from 'antd';

interface BoredState {
  activity: string,
  type: string,
  accessibility: number,
  isVisible: boolean,
}


type AcceptedProps = {
}


class ABModal extends React.Component<AcceptedProps, BoredState> {
  constructor(props: AcceptedProps) {
    super(props)
    this.state = {
        ...this.state,
        isVisible: false,
        activity: "",
        type: "",
        accessibility: 0,
      }
    }
    componentWillMount() {
    fetch('http://www.boredapi.com/api/activity/')
    .then ( (res) => res.json())
    .then ( json => {
      this.setState({
        activity: json.activity,
        type: json.type,
        accessibility: json.accessibility,
      })
      console.log(this.state.activity)
    }).catch(error => console.error('Error:', error))
}

  showModal = (): boolean => {
    this.setState({
      isVisible: true,
    });
    return this.state.isVisible
  };

  handleOk = (): boolean => {
    this.setState({
      isVisible: false,
    });
    return this.state.isVisible
  };

  handleCancel = (): boolean => {
    this.setState({
      isVisible: false,
    });
    return this.state.isVisible
  };
  
  render() {
    let isVisible = false;
    return (
      <div>
        <Button style={{border: "transparent"}} type="primary" onClick={this.showModal}>
          AB
        </Button>
        <div style={{zIndex: "unset"}}>

        <Modal
          style={{fontWeight:'bold', color: '#C9E3EE', borderRadius: '3%', backgroundColor: '#656614', marginTop: '-60%',marginLeft: '40%',padding: '2% 4%', border: '2px inset #E5ED9C'}}
          title="Are you Bored?"
          visible={this.state.isVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText={`    I'm not that bored    `}
          okText={`Let's do ${this.state.type} stuff!`}
          closable={false}
        >
          <br />
          <p>Do you enjoy {this.state.type} activites?</p>
          <br />
          <p>How about you {this.state.activity.toLowerCase()}!</p>
          <br />
          <p>Would you agree that this activity is {100* (1- this.state.accessibility)}% accessible?</p>
          <br />
        </Modal>
        </div>
      </div>
    );
  }
}


export default ABModal;