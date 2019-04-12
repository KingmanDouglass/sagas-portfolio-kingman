import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class ProjectForm extends Component {
    state = {
        newProject: {
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: '',
        }
    }

    handleChangeFor = event => {
        let propertyName = event.target.name;
        console.log("Property name is", propertyName);
        this.setState({
          newProject: {
            ...this.state.newProject,
            [propertyName]: event.target.value
          }
        });        
      };

    addNewProject = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject })
        this.setState({
            newPlant: {
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '',
            }
        });
}


render() {
    return (
        <div>
            <form onSubmit={this.addNewProject}>
                <label>Name</label>
                <input type='text' name="name" value={this.state.newProject.name} onChange={this.handleChangeFor} />
                <br />
                <label>Description</label>
                <input type='text' name="description" value={this.state.newProject.description} onChange={this.handleChangeFor} />
                <br />
                <label>Thumbnail</label>
                <input type='text' name="thumbnail" value={this.state.newProject.thumbnail} onChange={this.handleChangeFor} />
                <br />
                <label>Website</label>
                <input type='text' name="website" value={this.state.newProject.website} onChange={this.handleChangeFor} />
                <br />
                <label>Github</label> 
                <input type='text' name="github" value={this.state.newProject.github} onChange={this.handleChangeFor} />
                <br />
                <label>Date Completed</label>
                <input type='text' name="date_completed" value={this.state.newProject.date_completed} onChange={this.handleChangeFor} />
                <br/>
                <input type='submit' value='Add New Project' />
            </form>
        </div>
    );
}
}


export default connect(mapStateToProps)(ProjectForm);