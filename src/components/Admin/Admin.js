import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'

class Home extends Component {

    componentDidMount() {
        this.props.dispatch( { type: 'GET_PROJECT'})
    }

    render() {
        return (
            <div>
            <Header/>
            <div>
              <h1>Admin</h1>
              
            </div>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    
    });

export default connect(mapReduxStateToProps)(Home);


