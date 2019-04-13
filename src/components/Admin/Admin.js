import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import ProjectForm from '../ProjectForm/ProjectForm.js';
import ProjectTable from '../ProjectTable/ProjectTable.js';
import {Link} from 'react-router-dom';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch( { type: 'GET_PROJECT'})
    }

    render() {
        return (
            <div>
            <Header/>
            <Link to="/">Home</Link>
            <section>
              <h1>Admin</h1>
              <ProjectForm/>
              <ProjectTable/>
            </section>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    
    });

export default connect(mapReduxStateToProps)(Home);


