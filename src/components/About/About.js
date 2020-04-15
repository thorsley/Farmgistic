import React from 'react';

function About() {
    return (
        <div style={{margin: '1% 6%'}}>
        <br />
        <br />
        <h1 style={{backgroundColor: '#C9E3EE', color:'#656614', padding: '2%', margin: '0 2%', borderRadius: '.1em'}}>All About Us!</h1>
        <br />
        <br />
        <div style={{display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(5, 1fr)',
                    gridTemplateRows: 'repeat(auto-fill, minmax(5, 1fr)',
                    gridColumnGap: '1%',
                    gridRowGap: '1%'}}>

        <div style={{gridArea: '1 / 1 / 3 / 6'}}>
        <h3 style={{color: '#C9E3EE'}}>This application is for vendors, administrators and customers of farmers’ markets. Similar to existing applications that map out booths at a convention, here, market administrators can organize vendors according to their booth location at an in-person event. The vendors are able to update their booth’s profile, including an inventory for online purchase in version 2.0. Customers can view the customized map by searching all markets registered within the application and like their favorite local foods vendors for reference.</h3>
        </div>
        <div style={{gridArea: '3 / 3 / 6 / 6', backgroundColor: '#656614', color: '#C9E3EE', borderRadius: '.1em', margin:'1%', padding:'2%', border: '2px inset #E5ED9C', fontWeight: 'bold'}}>
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
        <h1 style={{backgroundColor: '#C9E3EE', color:'#656614', padding: '1%', margin: '0 1%', borderRadius: '.1em'}}>Our Next Steps!</h1>
        <br />
        <br />
        <ul style={{color: '#C9E3EE'}}>
            <lh style={{fontWeight: 'bold'}}>Version 2.0 Stretch Goals</lh>
            <li>Click vendor card to navigate to their external website</li>
            <li>Allow additional grid arrangments for market plots with asiles</li>
            <li>Allow uploading of images by User, Vendor, and Admin</li>
            <li>Convert CSS Grid display to Reactstrap Container, Row, and Column to address responsiveness.</li>
            <li>Allow Users to make online purchase of goods uploaded by Vendor</li>
        </ul>
        <br />
        <br />
        <h5 style={{color:"#E5ED9C"}}>Farm•gistic © is a small start-up out of Eleven Fifty Academy. Navigate to our future Patreon page! </h5>
        </div>
        </div>
        </div>
    )
}

export default About;