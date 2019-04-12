import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import ProjectForm from '../ProjectForm/ProjectForm.js';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch( { type: 'GET_PROJECT'})
    }

    render() {
        return (
            <div>
            <Header/>
            <section>
              <h1>Admin</h1>
              <ProjectForm/>
            </section>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    
    });

export default connect(mapReduxStateToProps)(Home);


