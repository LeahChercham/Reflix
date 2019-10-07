import React, { Component } from 'react';
import NotRented from './NotRented';
import Rented from './Rented';
class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
            user: {},
        }
    }

    handleBudget = (action) => {
        if (action === "remove") {
            let newUser = {...this.state.user}
            newUser.budget+=3
            this.setState({user : newUser })
        } else if (action === "add") {
            let newUser = {...this.state.user}
            newUser.budget-=3
            this.setState({user : newUser })
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

    async componentDidMount(){
        let user = this.props.users.find(u => u.isLoggedIn === true)
        await this.setState({user: user})
    }
    render() {
        return (
            <div className="catalog-container">
                <div className="firstRow">
                Search for a movie: <input id="searchInput" type="text" value={this.state.search} onChange={this.handleInput} />
                <p>Budget: {this.state.user.budget}</p>
                <div className="verticalLine"></div>
                </div>
                <div>
                {this.props.isSomeRented ? <Rented budget={this.state.user.budget} handleBudget={this.handleBudget} movieData={this.props.found} handleRented={this.props.handleRented} /> : <div></div>}
                <NotRented budget={this.state.user.budget} movieData={this.props.found} handleBudget={this.handleBudget} handleRented={this.props.handleRented} />
                </div>
            </div>
        );
    }
}

export default Catalog;