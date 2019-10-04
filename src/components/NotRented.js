import React, { Component } from 'react';
import Movie from './Movie';
import './styles/NotRented.css'

class NotRented extends Component {
    render() {
        return (
            <div>
                Catalog:
                <div className="notRentedMovies">

               {this.props.movieData.filter(c => c.isRented === false).map(m => <Movie movie={m} budget={this.props.budget} handleBudget={this.props.handleBudget} handleRented={this.props.handleRented} />)} 
                </div>
            </div>
        );
    }
}

export default NotRented;