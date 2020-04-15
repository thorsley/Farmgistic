import React, { Component } from "react";

interface QuizState {
  Question: string;
  Answer: string;
}

type AcceptedProps = {};

class Quiz extends React.Component<AcceptedProps, QuizState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      ...this.state,
      Question: "",
      Answer: "",
    };
  }

  // // showModal = () => {
  //   this.setState({ show: true });
  // };

  // hideModal = () => {
  //   this.setState({ show: false });
  // };
  componentWillMount() {
    fetch("http://jservice.io/api/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          Question: data[0].question,
          Answer: data[0].answer,
        });
        console.log(data);
      });
  }
  render() {
    return (
      <div>
        <h3>Question</h3>
        <p>{this.state.Question}</p>
        <h3>Answer</h3>
        <p>{this.state.Answer}</p>
      </div>
    );
  }
}

export default Quiz;
