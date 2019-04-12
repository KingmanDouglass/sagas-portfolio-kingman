import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'

class Home extends Component {

    componentDidMount() {
        this.props.dispatch( { type: 'GET_PROJECT'})
    }

    render() {
        const {classes} = this.props;
        return (
            <section className="background">
            <Header/>
            <div className="feelings">
              <h1>Kingman Reed Douglass</h1>
              <h3>Put Project One Here</h3>
              {this.props.reduxState.projects.map(project => (
                  <div>
                  <p>{project.name}</p>
                  </div>
              ))}
            </div>
            </section>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    
    });

export default connect(mapReduxStateToProps)(Home);


