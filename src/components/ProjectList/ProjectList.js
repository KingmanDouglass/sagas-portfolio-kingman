import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectList extends Component {
    
componentDidMount() {
    this.props.dispatch( { type: 'GET_PROJECT'})
}

// handleDelete = (plant) => {
//     this.props.dispatch({
//         type: "DELETE_PROJECT",
//         payload: project.id
//     })
// }
 

    render() {
        return (
            // </Header>
            <div>
              <div>
              <h1>Kingman Reed Douglass</h1>
              <h3>Put Project One Here</h3>
              {this.props.reduxState.projects.map(project => (
                  <div>
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                  <img src={project.thumbnail}></img>
                  <br/>
                  <a href={project.github} >GitHub</a>
                  <br/>
                  <a href={project.website}>Website</a>
                  <p>{project.date_completed}</p>
                  </div>
              ))}
            </div>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ProjectList);