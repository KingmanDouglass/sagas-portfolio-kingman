import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Admin from '../Admin/Admin.js';
import Home from '../Home/Home.js';
import Enter from '../Enter/Enter.js';
import Wrong from '../Wrong/Wrong.js';

//set up basic format
//main screen is enter page with two possible routes
//eventually gets us either to admin upon typing in url or HOME
class App extends Component {
  
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
