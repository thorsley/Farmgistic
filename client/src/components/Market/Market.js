import React from 'react';
// import MarketDisplay from './MarketDisplay/MarketDisplay';

class Market extends React.Component {
    render() {
        return(
            <div>
                <h2>Search for your Farmers' Market:</h2>
                <input placeholder="ex: Growing Places Winter Market"/>
                <button>Search</button>
                <hr />
                <h2>List of results</h2>
                {/* <MarketDisplay /> */}
                <button>Select Market and View Map</button>
                <br />
                <hr />
                <br />
                <table>
                    <tr>
                        <th>♥︎</th>
                        <th>Farm Name</th>
                        <th>Associated Market</th>
                        <th>Link</th>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Young Valley</td>
                        <td>Toronto</td>
                        <td>www.youngvalleyfarms.com</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Old Hills</td>
                        <td>Utah City</td>
                        <td>www.oldhillsfarm.com</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Market;