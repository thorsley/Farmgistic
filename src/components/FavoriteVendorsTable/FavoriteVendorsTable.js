import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "./FavoriteVendorsTable.css";

class FavoriteVendorsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favVendors: [],
      // token: this.props.token
    };
  }

    componentWillMount() {
        fetch('http://localhost:3003/favorite/', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2ODc0NDE1LCJleHAiOjE1ODY5NjA4MTV9.v_2HPwpnV1N9ijY7T8oVB_tan534CbIGBMTS-i9WzHI'
                // Authorization: localStorage.token,
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
                <h1 style={{backgroundColor: '#C9E3EE', color:'#656614', padding: '.4em', margin: '0 3em', borderRadius: '.1em'}}>Favorite Farm Booths</h1>
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
