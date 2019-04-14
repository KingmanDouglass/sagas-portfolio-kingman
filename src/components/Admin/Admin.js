import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import ProjectForm from '../ProjectForm/ProjectForm.js';
import ProjectTable from '../ProjectTable/ProjectTable.js';
import {Link} from 'react-router-dom';

//admin home page to set up links to form and table
//calls get GET to be able to pass the database information
class Home extends Component {

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


