import React, { Component } from 'react';
import Signup from './Signup/Signup'
import Login from './Login/Login'

import './auth.css'

class Auth extends Component{
    render(){
        return(
            <div>
                <Login/>
                <Signup/>
            </div>
        )
    }
}


export default Auth;