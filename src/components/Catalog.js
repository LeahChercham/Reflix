import React, { Component } from 'react';
import NotRented from './NotRented';
import Rented from './Rented';

class Catalog extends Component {
    constructor(){
        super()
        this.state={
            search: ""
        }
    }

    handleInput = (e) => {
        let newSearchInput = e.target.value
        this.setState({search : newSearchInput}, this.searchMovie)
    }

    searchMovie = () => {
        let searchArray = this.state.search
        let movieTitleArray = this.props.movieData.map(m => m.title)
        let them = movieTitleArray.map(t => {
        if(t.includes(searchArray)){
           return t
        }
        })
        console.log(them)       
    }

    render() {
        console.log(this.props.isSomeRented)
        return (
            <div className="catalog-container">
                <input type="text" value={this.state.search} onChange={this.handleInput}/>
                <div>Budget: HardCoded 10$</div>
                <div>Catalog</div>
                {this.props.isSomeRented ? <Rented movieData={this.props.movieData} handleRented={this.props.handleRented}/> : <div></div>}
                <NotRented movieData={this.props.movieData} handleRented={this.props.handleRented}/>                
            </div>
        );
    }
}

export default Catalog;