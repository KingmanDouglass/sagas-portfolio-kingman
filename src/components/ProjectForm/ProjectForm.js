import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class ProjectForm extends Component {
    state = {
        newProject: {
            id: '',
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: ''
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
                id: '',
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '',
                tag_id: ''
            }
        });
}


render() {
    return (
        <div>
            <form onSubmit={this.addNewPlant}>
                <label>Name</label>
                <input type='text' name="name" value={this.state.newProject.name} onChange={this.handleChangeFor} />
                <br />
                <label>Kingdom</label>
                <input type='text' name="kingdom" value={this.state.newProject.description} onChange={this.handleChangeFor} />
                <br />
                <label>Clade</label>
                <input type='text' name="clade" value={this.state.newProject.thumbnail} onChange={this.handleChangeFor} />
                <br />
                <label>Order</label>
                <input type='text' name="order" value={this.state.newProject.website} onChange={this.handleChangeFor} />
                <br />
                <label>Family</label> 
                <input type='text' name="family" value={this.state.newProject.github} onChange={this.handleChangeFor} />
                <br />
                <label>Subfamily</label>
                <input type='text' name="subfamily" value={this.state.newProject.date_completed} onChange={this.handleChangeFor} />
                <br />
                <label>Genus</label>
                <input type='text' name="genus" value={this.state.newProject.genus} onChange={this.handleChangeFor} />
                <br />
                <input type='submit' value='Add New Plant' />
            </form>
        </div>
    );
}
}


export default connect(mapStateToProps)(ProjectForm);