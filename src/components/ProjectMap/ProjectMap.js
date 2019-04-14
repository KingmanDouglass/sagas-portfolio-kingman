import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from '../ProjectList/ProjectList'

//maps out all the information gotten from the database and passes it through ProjectList
class ProjectMap extends Component {

    //get all the informatin from the projects database (joined)
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