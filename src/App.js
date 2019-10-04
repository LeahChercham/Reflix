import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Header from './components/Header';
import MovieDetail from './components/MovieDetail';
import MovieData from './components/constants'

let found = MovieData.slice()
class App extends Component{
  constructor(){
    super()
    this.state = {
        movieData : MovieData,
        isSomeRented : false,
        found : found,
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

searchMovie = (searchArray) => {
  let them = this.state.movieData.map(m => {
      let title = m.title.toLowerCase()
      if(title.includes(searchArray)){
          return m
      }
  }
  )
  them = them.filter(t => t != undefined )
  this.setState({found: them}, ()=> console.log(this.state.found))
}

  render(){
  return (
    <Router>
    <div className="App">
<Header />
<Route path="/" exact component={Home} />
<Route path="/catalog" exact render={() => <Catalog searchMovie={this.searchMovie} found={this.state.found} movieData={this.state.movieData} isSomeRented={this.state.isSomeRented} handleRented={this.handleRented}/>}  />
<Route path="/movies/:id" exact render={({match}) => <MovieDetail match={match} movieData={this.state.movieData} />}/>
    </div>

    </Router>
  )}
}

export default App;
