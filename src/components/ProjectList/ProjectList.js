import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    minWidth: 950,
    minHeight:580,
    maxWidth: 950,
    maxHeight:580,
    margin: 10,
    padding: 10,
    display: "inline-block",
 
  },
  media: {
    height: 400,
  },
  name: {
    borderBottom: `10px solid black`,
    fontWeight: 700,
    color: "black",
},
// github: {
//   textAlign: center,
// },
// website: {
//   textAlign: center,
// },
};

class ProjectList extends Component {
    

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
              {/* {this.props.reduxState.projects.map(project => ( */}
               <Card className={classes.card}>
               <CardActionArea>
                 <CardMedia
                   className={classes.media}
                   image={this.props.project.thumbnail}
                 />
                 <CardContent>
                   <Typography className={classes.name} gutterBottom variant="h5" component="h2">
                     {this.props.project.name}<span className="tag"> {this.props.project.tag_id}</span>
                   </Typography>
                   <Typography component="p">
                     {this.props.project.description}
                   </Typography>
                 </CardContent>
               </CardActionArea>
               <CardActions>
               <div className="github">
                 <Button href={this.props.project.github} variant="contained" size="small" color="secondary" >
                            GitHub
                </Button>
                </div>
                <div className="website">
                 <Button href={this.props.project.website} variant="contained" size="small" color="primary">
                   Website
                 </Button>
                 </div>
               </CardActions>
             </Card>
              {/* ))} */}
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