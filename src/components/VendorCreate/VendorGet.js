import React from 'react';
import { Container } from '@material-ui/core';
import SearchInput, {createFilter} from 'react-search-input'
import './vendorget.css'
class  VendorGet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            search:""
        };
    }
     componentDidMount() {
        fetch('http://localhost:3003/market',{
            method:'GET',
            headers:new Headers({ 
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg1ODM3ODE1LCJleHAiOjE1ODU5MjQyMTV9.IpNDAbPE8ekqe8sXgDUjkZtzH4O-rE9agb2uc-IBnxM'
            })
        }).then((response)=>response.json())
        .then((findresponse)=>{
            this.setState({
                data:findresponse
               })
             console.log(findresponse)
             console.log(findresponse[0].marketName)
             console.log(findresponse[0].address)
             console.log(findresponse[0].size)
                
        })
}
    render() { 
        return (  
            <div> 
                <Container>
            <input type="text" placeholder="Search.." onChange={this.onChange}></input>
            <button type="submit">Search button</button>

        <table className='test'>
        <thead>
            <tr>
                <th>Market Name</th>
                <th>Address</th>
                <th>Size</th>
            </tr>
        </thead>
        {this.state.data.map((findresponses,index)=>
        (
        <tbody key={index}>
           <tr>
            <td>{findresponses.marketName}</td>
           <td>{findresponses.address}</td>
           <td>{findresponses.size}</td>
           </tr>
        </tbody>
        ))}
        </table>
                </Container>
            
        </div>
        )
    }
}
 
export default VendorGet;