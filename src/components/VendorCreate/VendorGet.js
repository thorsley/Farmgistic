import React from 'react';
import { Container } from '@material-ui/core';
import SearchInput, {createFilter} from 'react-search-input'
import './vendorget.css'


const KEYS_TO_FILTERS = ['id','marketName', 'address', 'size']

class  VendorGet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            searchTerm:'',
        }
        this.searchUpdated = this.searchUpdated.bind(this)
    }

  
     componentDidMount() {
        fetch('http://localhost:3003/market',{
            method:'GET',
            headers:new Headers({ 
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2MzUzMDQ3LCJleHAiOjE1ODY0Mzk0NDd9.NNgEmcJfhXRE_Ogu9OC3RpQ3ssIBCv08n1Z_iUWvoZY'
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
        }).catch(error => console.error('Error:', error))
}
    render() { 
        const filterdMarkets = this.state.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (  
            <div> 
                <Container>
            {/* <input type="text" placeholder="Search.." onChange={this.onChange}></input>
            <button type="submit">Search button</button> */}
            <SearchInput className="search-input" onChange={this.searchUpdated}/>


        <table className='test'>
        <thead>
            <tr>
                <th>Market Name</th>
                <th>Address</th>
                <th>Size</th>
            </tr>
        </thead>
        {filterdMarkets.map((findresponses,index)=>
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
    searchUpdated (term) {
        this.setState({searchTerm: term})}
}
 
export default VendorGet;