import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Admin from '../Admin/Admin.js';
import Home from '../Home/Home.js';
import Enter from '../Enter/Enter.js';
import Wrong from '../Wrong/Wrong.js';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
       <Router>
       <Route exact path="/" component={Enter} />
       <Route exact path="/Home" component={Home} />
       <Route exact path="/Wrong" component={Wrong} />
       <Route path="/admin" component={Admin} />
   </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
