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

  //take us to home page
nextPage = (event) => {
    this.props.history.push('/Home')
}

  //take us to wrong answer page
wrongPage = (event) => {
    this.props.history.push('/Wrong')
}

//displays two buttons
    render() {
        const { classes } = this.props;
        return (
            <div className="enter">
              <Button onClick={this.wrongPage} variant="contained" color="secondary" className={classes.button}>
                Red Pill
              </Button>
              <Button onClick={this.nextPage} variant="contained" color="primary" className={classes.button}>
                Blue Pill
              </Button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  

  export default connect(mapReduxStateToProps)(withStyles(styles)(Home));