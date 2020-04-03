import React from './node_modules/react';
import Card from './node_modules/@material-ui/core/Card';
import Typography from './node_modules/@material-ui/core/Typography';
import CardContent from './node_modules/@material-ui/core/CardContent';
import './FavoriteVendorsTable.css';

class FavoriteVendorsTable extends React.Component{

    render() {
        return (
            <>
            <div className='scroll' >
                <h3>Table of Favorite Farm Booths</h3>
                <Card className="cardBox">
                    <CardContent>
                        <Typography className="titleCard" variant="h5" component="h2">
                            Farm Name
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            Address
                        </Typography>
                        <Typography variant="body1" component="p">
                            # of ❤︎'s
                        </Typography>
                        <Typography variant="body2" component="p">
                            Short Bio: this is my box this is my box i never travel without my box...in the third drawer in the third drawer oh little boy in the third drawer i keep licorice licorice black sweet licorice black sweet licorice have some
                        </Typography>
                    </CardContent>
                </Card>
                {/* {this.state.favVendor.map((booth, key) => {
                    return (
                        <div>
                            <div key={key}>
                            <Card className="cardBox">
                            <CardContent>
                                <Typography className="titleCard" variant="h5" component="h2" >
                               Farm Name: {booth.name} </Typography>
                                <Typography variant="body2" component="p">
                                {booth.address} </Typography>
                                <Typography variant="body2" component="p">
                                {booth.bio}</Typography>
                                <Typography variant="body2" component="p">
                               # of likes{booth.likes}</Typography>
                                </CardContent>
                                </Card>
                            </div>
                        </div>
                    )
                })} */}
            </div>
            </>
        )
    }
}

export default FavoriteVendorsTable;