import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from '../ProjectList/ProjectList'

class ProjectMap extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_PROJECT'})
    }

    render() {
    return (
      <div>
            {this.props.reduxState.projects.map(project =>
                <ProjectList key={project.id} project={project}/>
            )}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(ProjectMap);