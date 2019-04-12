import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Admin from '../Admin/Admin.js';
import Home from '../Home/Home.js';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
       <Router>
       <div className="App">
       <Route exact path="/" component={Home} />
       <Route path="/admin" component={Admin} />
     </div>
   </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
