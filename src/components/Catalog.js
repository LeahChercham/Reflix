import React, { Component } from 'react';
import NotRented from './NotRented';
import Rented from './Rented';

class Catalog extends Component {
    render() {
        console.log(this.props.isSomeRented)
        return (
            <div className="catalog-container">
                <input type="text"/>
                <div>Budget: HardCoded 10$</div>
                <div>Catalog</div>
                {this.props.isSomeRented ? <Rented movieData={this.props.movieData} handleRented={this.props.handleRented}/> : <div></div>}
                <NotRented movieData={this.props.movieData} handleRented={this.props.handleRented}/>                
            </div>
        );
    }
}

export default Catalog;