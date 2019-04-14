import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Home extends Component {

nextPage = (event) => {
    this.props.history.push('/')
}

    render() {
        const { classes } = this.props;
        return (
            <div className="wrong">
              <Button onClick={this.nextPage} variant="contained" color="primary" className={classes.button}>
                Try Again
              </Button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  

  export default connect(mapReduxStateToProps)(withStyles(styles)(Home));