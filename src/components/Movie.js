import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Movie extends Component {

    handleRented = (e) => {
        let id = this.props.movie.id
        let action = e.target.name
        this.props.handleRented(id, action)
    }

    render() {
        return (
            <div>
                <Link to="/movieDetail"> I display image title and + and - icon</Link>
               
                {this.props.movie.isRented ?
                     <button name="remove" onClick={this.handleRented}>Delete from rented</button> 
                     : <button name="add" onClick={this.handleRented}>Add to rented</button> }
                
            </div>
        );
    }
}

export default Movie;