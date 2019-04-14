import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import ProjectMap from '../ProjectMap/ProjectMap'

class Home extends Component {

    render() {
        return (
            <div className="mainDiv">
            <Header/>
            <ProjectMap/>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    
    });

export default connect(mapReduxStateToProps)(Home);


