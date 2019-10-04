import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Movie extends Component {

    handleRented = (action) => {
        let id = this.props.movie.id
        this.props.handleRented(id, action)
    }

    handleBudget = (e) => {
                let action = e.target.name
        if(action==="add"){
            if(this.props.budget >= 3){
               this.props.handleBudget(action)
               this.handleRented(action)
            } else {
                alert("You don't have enough budget")
            }
        } else {
            this.props.handleBudget(action)
            this.handleRented(action)
        }
    }

    render() {
        return (
            <div>
                <Link to={`/movies/${this.props.movie.id}`}> 
                <img src={this.props.movie.img} alt="Movie Poster"/>
                <div>{this.props.movie.title}</div>
               </Link>
               
                {this.props.movie.isRented ?
                     <button name="remove" onClick={this.handleBudget}>Delete from rented</button> 
                     : <button name="add" onClick={this.handleBudget}>Add to rented</button> }
                
            </div>
        );
    }
}

export default Movie;