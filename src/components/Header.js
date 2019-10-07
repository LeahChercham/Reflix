import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/"><h1>HOME</h1></Link>
                <Link to="/catalog"><h1>CATALOG</h1></Link> 
                <h1 id="Logo">REFLIX</h1>
            </div>
            
        )
    }
}

export default Header;