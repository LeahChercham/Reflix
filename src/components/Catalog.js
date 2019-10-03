import React, { Component } from 'react';

import Movie from './Movie';
import MovieData from './constants'

class Catalog extends Component {
    constructor(){
        super()
        this.state = {
            movieData : MovieData
        }
    }
    handleRented = (id, action) => {
        let newMovieData = [...this.state.movieData]
        if(action === "add"){
            newMovieData[id].isRented = true
            this.setState({movieData : newMovieData})
        } else if (action === "remove"){
            newMovieData[id].isRented = false
            this.setState({movieData : newMovieData})
        }
    }


    render() {
        return (
            <div className="catalog-container">
                <input type="text"/>
                <div>Budget: HardCoded 10$</div>
                <div>Catalog</div>
                {this.state.movieData.map(m => <Movie movie={m} handleRented={this.handleRented} />)}
                
            </div>
        );
    }
}

export default Catalog;