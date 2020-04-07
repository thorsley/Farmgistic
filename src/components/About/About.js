import React from 'react';

function About() {
    return (
        <>
        <br />
        <br />
        <h1 style={{backgroundColor: '#C9E3EE', color:'#656614', padding: '.4em', margin: '0 3em', borderRadius: '.1em'}}>All About Us!</h1>
        <br />
        <br />
        <div style={{display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gridTemplateRows: 'repeat(5, 1fr)',
                    gridColumnGap: '0px',
                    gridRowGap: '0px'}}>

        <div style={{gridArea: '1 / 1 / 3 / 6'}}>
        <h3>This application is for vendors, administrators and customers of farmers’ markets. Similar to existing applications that map out booths at a convention, here, market administrators can organize vendors according to their booth location at an in-person event. The vendors will be able to update their booth’s profile, including an inventory for online purchase in version 2.0. Customers can view the customized map by searching all markets registered within the application and save their favorite local foods vendors for reference.</h3>
        </div>
        <div style={{gridArea: '3 / 3 / 6 / 6'}}>
        <br />
        <ul>
            <li>
                User 1 • The customer • 
                I use this app before going to a new farmers market, it allows me to be comfortable with the layout and see what vendors will be there. I also am able to create a list of favorite vendors making my trip more efficient, because I can go directly where I want to. 	
            </li>
            <br />
            <li>User 2 •  The farmer • 
                I use this app the night before every Saturday market. I upload my current inventory and announce specials. It’s so much more convenient than drafting a mass email to my regulars.
            </li>
            <br />
            <li>User 3 • The market administrator • 
                I use this app while setting up for each market. I have access to a list of all the potential vendors and can easily Drag And Drop to map their booth location that day. I can also watch customer information about favorites to analyze trends; my favorite!
            </li>
        </ul>
        </div>
        <div style={{gridArea: '3 / 1 / 6 / 3'}}>
        <br />
        <h4>Farm•gistic is a small start-up out of Eleven Fifty Academy. Navigate to our Patreon page. </h4>
        </div>
        </div>
        </>
    )
}

export default About;