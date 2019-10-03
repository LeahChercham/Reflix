import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/catalog">
                <div className="box">Leah</div>

                </Link>
                <Link to="/catalog">
                <div className="box">Paul</div>

                </Link>
                <Link to="/catalog">
                <div className="box">Louise</div>

                </Link>
                <Link to="/catalog">
                <div className="box">Janina</div>

                </Link>
            </div>
        );
    }
}

export default Home;