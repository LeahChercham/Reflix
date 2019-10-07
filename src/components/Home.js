import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Home extends Component {
    login = (event) => {
        let id = event.currentTarget.id
        this.props.login(id)
    }

    render() {
        return (
            <div className="users">
                {this.props.users.map(u => {
                    return <Link to="/catalog" id={u.id} onClick={this.login}>
                        <div className="box" user={u}><h1>{u.name}</h1></div>
                        </Link>
                })}
            </div>
        );
    }
}

export default Home;