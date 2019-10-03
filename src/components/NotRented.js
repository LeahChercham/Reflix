import React, { Component } from 'react';
import Movie from './Movie';

class NotRented extends Component {
    render() {
        return (
            <div>
                Not rented:
               {this.props.movieData.filter(c => c.isRented === false).map(m => <Movie movie={m} handleRented={this.props.handleRented} />)} 
            </div>
        );
    }
}

export default NotRented;