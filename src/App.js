import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Header from './components/Header';

class App extends Component{


  render(){
  return (
    <Router>
    <div className="App">
<Header />
<Route path="/" exact component={Home} />
<Route path="/catalog" component={Catalog} />
    </div>
    </Router>
  )}
}

export default App;
