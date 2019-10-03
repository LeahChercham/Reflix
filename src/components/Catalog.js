import React, { Component } from 'react';

import Movie from './Movie';
import MovieData from './constants'
import NotRented from './NotRented';
import Rented from './Rented';

class Catalog extends Component {
    constructor(){
        super()
        this.state = {
            movieData : MovieData,
            isSomeRented : false,
        }
    }
    handleRented = (id, action) => {
        let newMovieData = [...this.state.movieData]
        let isSomeRentedNow = {...this.state.isSomeRented}
        if(action === "add"){
            newMovieData[id].isRented = true
            isSomeRentedNow = true
            this.setState({movieData : newMovieData, isSomeRented : isSomeRentedNow})
        } else if (action === "remove"){
            newMovieData[id].isRented = false
            this.setState({movieData : newMovieData}, ()=> {
                if(this.state.movieData.find(m => m.isRented === true) === undefined){
                    isSomeRentedNow = false
                    this.setState({isSomeRented : isSomeRentedNow})
                }
            })
        }
    }


    render() {
        return (
            <div className="catalog-container">
                <input type="text"/>
                <div>Budget: HardCoded 10$</div>
                <div>Catalog</div>
                {this.state.isSomeRented ? <Rented movieData={this.state.movieData} handleRented={this.handleRented}/> : <div></div>}
                <NotRented movieData={this.state.movieData} handleRented={this.handleRented}/>
                
                
            </div>
        );
    }
}

export default Catalog;