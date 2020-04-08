import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import './FavoriteVendorsTable.css';

class FavoriteVendorsTable extends React.Component{
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
          favVendors: [],
          // token: this.props.token
        };
      }
    

    componentWillMount() {
        fetch('http://localhost:3003/favorite/', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2MjY1Mzk3LCJleHAiOjE1ODYzNTE3OTd9.ZVWZ9k6N-POXifa5dIRkTPNyLb_6Ze0-x7pCAGJoXrk'
                // 'Authorization': props.token
            })
        }).then ( (res) => res.json())
        .then ( json => {
          this.setState({
            favVendors: json
          })
        }).catch(error => console.error('Error:', error))
    }    
    render() {
        return (
            <>
            <div className='scroll' style={{justifyContent: 'center', overflow: 'scroll'}} >
                <br />
                <br />
                <h1 style={{color:'#E5ED9C'}}>Favorite Farm Booths</h1>
                <br />
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {this.state.favVendors.sort((a, b) => b.booth.likes - a.booth.likes).map((vendor) => {
                    return (
                        <Card style={{justifyContent: 'center', margin: '.3em', flex: '13em'}} key={vendor.booth.likes}>
                            <CardContent>
                                <Typography className="titleCard" variant="h5" component="h2">
                                    {vendor.booth.farmName}
                                </Typography>
                                <Typography style={{color:'#1A506B'}} variant="body1" component="p">
                                     ❤︎ {vendor.booth.likes}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {vendor.booth.bio}
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    {vendor.booth.URL}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
                </div>
            </div>
            </>
        )
    }
}

export default FavoriteVendorsTable;