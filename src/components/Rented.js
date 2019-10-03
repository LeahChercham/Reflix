import React, { Component } from 'react';
import Movie from './Movie';

class Rented extends Component {
    render() {
        return (
            <div>
                Rented:
                {this.props.movieData.filter(c => c.isRented === true).map(m => <Movie movie={m} handleRented={this.props.handleRented} />)}
            </div>
        );
    }
}

export default Rented;