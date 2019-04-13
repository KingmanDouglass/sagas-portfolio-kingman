import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const mapStateToProps = reduxState => ({
    reduxState,
});

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
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
            tag_id: 5
        }
    }

    // handleChangeFor = event => {
    //     let propertyName = event.target.name;
    //     console.log("Property name is", propertyName);
    //     this.setState({
    //       newProject: {
    //         ...this.state.newProject,
    //         [propertyName]: event.target.value
    //       }
    //     });        
    //   };

    handleChange = propertyName => event => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                [propertyName]: event.target.value,
            }
        })
}

    addNewProject = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject })
        this.setState({
            newProject: {
                id: '',
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '',
                tag_id: 5
            }
        });
}


render() {
    const { classes } = this.props;
    return (
        <div>
            <form className={classes.container} noValidate autoComplete="off">
                {/* <label>Name</label>
                <input type='text' name="name" value={this.state.newProject.name} onChange={this.handleChangeFor} />
                <br /> */}


                <TextField
                    label="Name"
                    className={classes.textField}
                    value={this.state.newProject.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />

                <TextField
                    label="Description"
                    className={classes.textField}
                    value={this.state.newProject.description}
                    onChange={this.handleChange('description')}
                    margin="normal"
                    />

                <TextField
                    label="Thumbnail"
                    className={classes.textField}
                    value={this.state.newProject.thumbnail}
                    onChange={this.handleChange('thumbnail')}
                    margin="normal"
                    />

                <TextField
                    label="Website"
                    className={classes.textField}
                    value={this.state.newProject.website}
                    onChange={this.handleChange('website')}
                    margin="normal"
                    />

                <TextField
                    label="Github"
                    className={classes.textField}
                    value={this.state.newProject.github}
                    onChange={this.handleChange('github')}
                    margin="normal"
                    />
            
                <TextField
                    label="Date Completed"
                    type="date"
                    value={this.state.newProject.date_completed}
                    className={classes.textField}
                    onChange={this.handleChange('date_completed')}
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                        }}
                />

<TextField
                        select
                        label="Select A Tag"
                        className={classes.textField}
                        value={this.state.newProject.tag_id}
                        onChange={this.handleChange('tag_id')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
/>

<Button variant="contained" color="primary" className={classes.button} onClick={this.addNewProject}>Submit</Button>

                {/* <label>Description</label>
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
                <input type='date' name="date_completed" value={this.state.newProject.date_completed} onChange={this.handleChangeFor} />
                <br/>
                <input type='submit' value='Add New Project' /> */}
              
            </form>
        </div>
    );
}
}


export default connect(mapStateToProps)(withStyles(styles)(ProjectForm));