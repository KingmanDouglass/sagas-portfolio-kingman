import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

//material ui styles
const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

//displays all the information from the database and does a map to acquire all the tag inputs
class ProjectTable extends Component {

//get all the information from the database as well as retrigger upon delete
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_PROJECTS' });
}

//when delete is clicked, dispatch request to remove from database
    handleDelete = (project) => {
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: project.name })
}

    render() {
        const { classes } = this.props;
        return (
        <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.props.reduxState.projects.map(project => (
            <TableRow key={project.id}>
              <TableCell component="th" scope="row">
                {project.name}
              </TableCell>
              <Button variant="contained" color="primary" className={classes.button} onClick={()=>{this.handleDelete(project)}}>Delete</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

    export default connect(mapReduxStateToProps)(withStyles(styles)(ProjectTable));
