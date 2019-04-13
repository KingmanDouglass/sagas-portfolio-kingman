import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Header from '../Header/Header'


const styles = {
  card: {
    minWidth: 350,
    minHeight:350,
    margin: 10,
    padding: 10,
    display: "inline-block",
 
  },
  cardDiv: {
      margin: "0 auto 0 auto",
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      textAlign: "center"
     
  }
}

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
        const { classes } = this.props;
        return (
            <div>
            <Header/>
              <h1>Kingman Reed Douglass</h1>
              <h3>Put Project One Here</h3>
              {this.props.reduxState.projects.map(project => (
                  <Card className={classes.card}>
                  <img className={classes.cardDiv} height='200' width='200'src={project.thumbnail} alt={project.name} />
                  <div className={classes.cardDiv}>
                    <p>{project.tag_id}</p>
                    <p>{project.description}</p>
                    <a href={project.github} >GitHub</a>
                    <a href={project.website}>Website</a>
                  </div>
                </Card>
              ))}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withStyles(styles)(ProjectList));




{/* <div>
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                  <img src={project.thumbnail}></img>
                  <br/>
                  <a href={project.github} >GitHub</a>
                  <br/>
                  <a href={project.website}>Website</a>
                  <p>{project.date_completed}</p>
                  </div> */}