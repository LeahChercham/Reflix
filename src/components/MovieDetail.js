import React, { Component } from 'react';

class MovieDetail extends Component {
    render() {
       console.log("match " + this.props.match.params.id)
        return (
            <div>
                <div>Hello</div>
                {/* <div>{this.props.movie.title}</div>
                <img src={this.props.movie.img} alt="image of movie"/>
                <div>{this.props.movie.year}</div>
                <div>{this.props.movie.descrShort}</div> */}
            </div>
        );
    }
}

export default MovieDetail;