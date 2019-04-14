import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';

//material ui styles
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
};

class ProjectList extends Component {

  //if there is no thumbnail, use the default
  conditionalThumbnail = () => {
    if (this.props.project.thumbnail === null) {
        return 'images/github.png';
    }
    else {
        return this.props.project.thumbnail
    }
};

//if there is no github address, disable the button
conditionalGithub = () => {
  if (this.props.project.github === null) {
      return true;
  }
}

//if there is no website address, disable the button
conditionalWebsite = () => {
    if (this.props.project.website === null) {
        return true;
    }
}
    
    render() {
        const { classes } = this.props;
        return (
            <div>
               <Card className={classes.card}>
               <CardActionArea>
                 <CardMedia
                   className={classes.media}
                   image={this.conditionalThumbnail()}
                 />
                 <CardContent>
                   <Typography className={classes.name} gutterBottom variant="h5" component="h2">
                     {this.props.project.name}<span className="tag"> {this.props.project.tag_id}</span>
                   </Typography>
                   <Typography component="p">
                     {this.props.project.description}
                   </Typography>
                   <Typography component="p">
                     Date Completed: <Moment format="YYYY/MM/DD" date={this.props.project.date_completed}/>
                   </Typography>
                 </CardContent>
               </CardActionArea>
               <CardActions>
               <div className="github">
                 <Button href={this.props.project.github} disabled={this.conditionalGithub()} variant="contained" size="small" color="secondary" >
                            GitHub
                </Button>
                </div>
                <div className="website">
                 <Button href={this.props.project.website} disabled={this.conditionalWebsite()} variant="contained" size="small" color="primary">
                   Website
                 </Button>
                 </div>
               </CardActions>
             </Card>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withStyles(styles)(ProjectList));
