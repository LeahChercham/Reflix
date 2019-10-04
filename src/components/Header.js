import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './styles/Header.css'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <div><img  className="App-logo" src={require("../img/blue-reflix-logo.png")} alt="Reflix"/></div>
            </div>
        )
    }
}

export default Header;