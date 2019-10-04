import React, { Component } from 'react';

class MovieDetail extends Component {
    render() {
        let id = this.props.match.params.id
        return (
            <div>
                <div>{this.props.movieData[id].title}</div>
                <img src={this.props.movieData[id].img} alt="image of movie"/>
                <div>{this.props.movieData[id].year}</div>
                <div>{this.props.movieData[id].descrShort}</div>
            </div>
        );
    }
}

export default MovieDetail;