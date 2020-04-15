import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "./FavoriteVendorsTable.css";

class FavoriteVendorsTableDisplay extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      favVendors: [],
      // token: this.props.token
    };
  }


    componentWillMount() {
 fetch("https://dcb-market-server.herokuapp.com/favorite/", {
   method: 'GET',
            headers: new Headers({
               'Authorization': localStorage.token
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
                {/* <h2>Favorite Farm Booths</h2> */}
                <br />
                <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '1%'}}>
                {this.state.favVendors.sort((a, b) => b.booth.likes - a.booth.likes).map((vendor) => {
                    return (
                        <Card style={{justifyContent: 'center', margin: '2%', flex: '13em'}} key={vendor.booth.likes}>
                            <CardContent>
                                <Typography className="titleCard" variant="h5" component="h2">
                                    {vendor.booth.farmName}
                                </Typography>
                                <Typography variant="body1" component="p">
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

export default FavoriteVendorsTableDisplay;
