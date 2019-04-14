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
    this.props.history.push('/Home')
}

wrongPage = (event) => {
    this.props.history.push('/Wrong')
}

    render() {
        const { classes } = this.props;
        return (
            <div className="enter">
              <Button onClick={this.wrongPage} variant="contained" color="primary" className={classes.button}>
                Red Pill
              </Button>
              <Button onClick={this.nextPage} variant="contained" color="primary" className={classes.button}>
                Blue Pill
              </Button>
              {/* <button onClick={this.nextPage}>Let's Do This Thang</button> */}
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  

  export default connect(mapReduxStateToProps)(withStyles(styles)(Home));