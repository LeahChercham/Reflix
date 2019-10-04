import React, { Component } from 'react';
import NotRented from './NotRented';
import Rented from './Rented';

class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
            budget: 10,
        }
    }

    handleBudget = (action) => {
        if (action === "remove") {
            this.state.budget += 3
        } else if (action === "add") {
            this.state.budget -= 3
        }
    }

    handleInput = (e) => {
        let newSearchInput = e.target.value
        this.setState({ search: newSearchInput }, this.searchMovie)
    }

    searchMovie = () => {
        let searchArray = this.state.search.toLowerCase()
        this.props.searchMovie(searchArray)
    }

    render() {
        return (
            <div className="catalog-container">
                <input type="text" value={this.state.search} onChange={this.handleInput} />
                <div>Budget: {this.state.budget}</div>
                <div>Catalog</div>
                {this.props.isSomeRented ? <Rented budget={this.state.budget} handleBudget={this.handleBudget} movieData={this.props.found} handleRented={this.props.handleRented} /> : <div></div>}
                <NotRented budget={this.state.budget} movieData={this.props.found} handleBudget={this.handleBudget} handleRented={this.props.handleRented} />
            </div>
        );
    }
}

export default Catalog;