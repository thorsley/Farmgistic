import React from 'react';
import Farmbar from '../Farmbar/Farmbar';

class Splash extends React.Component {
    render() {
        return(
            <div>
                <h2 style={{color:"#7C8118"}}>FARM•GISTIC</h2>
                {/* <p>Splash is sneaky and secretly holding everything displayed by the Navbar BrowserRouter</p> */}
                <Farmbar />
            </div>
        )
    }
}

export default Splash;