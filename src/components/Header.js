import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <div>Really Cool Reflix Logo</div>
            </div>
        )
    }
}

export default Header;