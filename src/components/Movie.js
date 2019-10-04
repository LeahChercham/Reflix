import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Movie extends Component {

    handleRented = (e) => {
        debugger
        let id = this.props.movie.id
        let action = e.target.name
        this.props.handleRented(id, action)
    }

    render() {
        return (
            <div>
                <Link to={`/movies/${this.props.movie.id}`}> 
                <img src={this.props.movie.img} alt="Movie Poster"/>
                <div>{this.props.movie.title}</div>
               </Link>
               
                {this.props.movie.isRented ?
                     <button name="remove" onClick={this.handleRented}>Delete from rented</button> 
                     : <button name="add" onClick={this.handleRented}>Add to rented</button> }
                
            </div>
        );
    }
}

export default Movie;