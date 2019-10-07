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
            let newBudget = this.state.budget+3
            this.setState({budget : newBudget })
        } else if (action === "add") {
            let newBudget = this.state.budget-3
            this.setState({budget : newBudget })
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
                <div className="firstRow">
                Search for a movie: <input id="searchInput" type="text" value={this.state.search} onChange={this.handleInput} />
                <p>Budget: {this.state.budget}</p>
                <div className="verticalLine"></div>
                </div>
                <div>
                {this.props.isSomeRented ? <Rented budget={this.state.budget} handleBudget={this.handleBudget} movieData={this.props.found} handleRented={this.props.handleRented} /> : <div></div>}
                <NotRented budget={this.state.budget} movieData={this.props.found} handleBudget={this.handleBudget} handleRented={this.props.handleRented} />
                </div>
            </div>
        );
    }
}

export default Catalog;