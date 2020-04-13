import React, {Component} from 'react';
import TacoApiModal  from './Modal'


class Trevor extends Component {
    state = {
        seasoning:null,
        shell:null,
        mixin:null,
        condiment:null,
        baseLayer:null,
        show:false,
      }
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
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
        console.log(data.seasoning.name)//seasoning
        console.log(data.shell.name);//shell
        console.log(data.mixin.name);//mixin
        console.log(data.condiment.name);//condiment
        console.log(data.base_layer.name);//base_layer
      });
    }
    render() { 
        return ( 
            <div>

          
          {/* <TacoApiModal /> */}

        {/* Displays all assigned information */}
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
                
                
        </div>
         );
    }
}
 
export default Trevor ;