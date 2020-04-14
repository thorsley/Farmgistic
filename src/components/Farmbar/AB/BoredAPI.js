import React from 'react';
import Modal from './Modal';

class BoredAPI extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activity: "",
            type: ""
        }
    }

    componentWillMount() {
        fetch('http://www.boredapi.com/api/activity/')
        .then ( (res) => res.json())
        .then ( json => {
            console.log(json)
          this.setState({
            activity: json.activity,
            type: json.type,
          })
        }).catch(error => console.error('Error:', error))
    }

    render () {
        return (
            <div>
                <Modal state={this.state}/>
            </div>
        )
    }
}