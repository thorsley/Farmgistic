import React, { Component } from "react";
import { Modal, Button } from 'antd';


interface TacoState{
    seasoning:string,
        shell:string,
        mixin:string,
        condiment:string,
        baseLayer:string,
        visible: boolean,
        
}
type Iprops={

}

class TacoModal extends Component<Iprops,TacoState>{
constructor(props: Iprops){
    super(props)
    this.state={
        seasoning:"",
        shell:"",
        mixin:"",
        condiment:"",
        baseLayer:"",
        visible:false,
    }
}
componentDidMount(){
    fetch('http://taco-randomizer.herokuapp.com/random/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          this.setState({
              seasoning:data.seasoning.name,
              shell:data.shell.name,
                mixin:data.mixin.name,
                condiment:data.condiment.name,
                baseLayer:data.base_layer.name
          })
        // console.log(data.seasoning.name)//seasoning
        // console.log(data.shell.name);//shell
        // console.log(data.mixin.name);//mixin
        // console.log(data.condiment.name);//condiment
        // console.log(data.base_layer.name);//base_layer
      });
    }
    showModal = ()=> {
    this.setState({
      visible: true,
    });
    
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
    
  };

  handleCancel = ()=> {
    this.setState({
      visible: false,
    });
   
  };
render(){
    return(
        <div>
            <Button  type="primary" onClick={this.showModal}>
          TacoModal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
       
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#656614",
            color:'#C9E3EE',
            border:'2px solid black',
            borderRadius:'5%',
            left: "50%",
            top: '50%',
            transform: "translate(-50%, -50%)",
            position:'absolute',
          }}>
           <h3>Shell</h3>
        <p>{this.state.shell}</p>
        <h3>Mixin</h3>
        <p>{this.state.mixin}</p>
        <h3>Seasoning</h3>
        <p>{this.state.seasoning}</p>
        <h3>Condiment</h3>
        <p>{this.state.condiment}</p> 
        <h3> Base Layer</h3>  
        <p>{this.state.baseLayer}</p>

        </Modal>
        </div>
 
 
    )
}


}



export default TacoModal;