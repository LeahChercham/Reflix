import React, { Component } from 'react';
import NotRented from './NotRented';
import Rented from './Rented';

class Catalog extends Component {
    constructor(){
        super()
        this.state={
            search:"", 
        }
    }

    handleInput = (e) => {
        let newSearchInput = e.target.value
        this.setState({search : newSearchInput}, this.searchMovie)
    }

    searchMovie = () => {
        let searchArray = this.state.search.toLowerCase()
        this.props.searchMovie(searchArray)
    }

    render() {
        return (
            <div className="catalog-container">
                <input type="text" value={this.state.search} onChange={this.handleInput}/>
                <div>Budget: HardCoded 10$</div>
                <div>Catalog</div>
                {this.props.isSomeRented ? <Rented movieData={this.props.found} handleRented={this.props.handleRented}/> : <div></div>}
                <NotRented movieData={this.props.found} handleRented={this.props.handleRented}/>                
            </div>
        );
    }
}

export default Catalog;