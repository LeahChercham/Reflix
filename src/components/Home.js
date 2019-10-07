import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div className="users">
                {this.props.users.map(u => {
                    return <Link to="/catalog">
                        <div className="box" user={u}><h1>{u.name}</h1></div>
                        </Link>
                })}
            </div>
        );
    }
}

export default Home;