import React, { Component } from 'react';
import Movie from './Movie';

class Rented extends Component {
    render() {
        return (
            <div>    
            <h1>Rented:</h1>
            <div className="rentedMovies">
                {this.props.movieData.filter(c => c.isRented === true).map(m => <Movie movie={m} budget={this.props.budget} handleBudget={this.props.handleBudget} handleRented={this.props.handleRented} />)}
            </div>
            </div>
        );
    }
}

export default Rented;