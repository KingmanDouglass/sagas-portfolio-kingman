import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import ProjectList from '../ProjectList/ProjectList'

class Home extends Component {

    render() {
        return (
            <div className="mainDiv">
            <Header/>
            <ProjectList/>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    
    });

export default connect(mapReduxStateToProps)(Home);


