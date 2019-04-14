import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    name: {
        borderBottom: `10px solid white`,
        fontWeight: 700,
        color: "white",
    },
    info: {
        fontWeight: 900,
        color: "white",
    },
  };

class Header extends Component {

    render() {
        const { classes } = this.props;
        return (
        <div className="App">
        <header className="App-header">
        <Typography className={classes.name} variant="h2" gutterBottom>
        Kingman Reed Douglass
        </Typography>
        <Typography className={classes.info} variant="h5" gutterBottom>
        kingmanrdouglass@gmail.com (847) 777-9964
        </Typography>
        </header>
        </div>
        )
    }
}



export default withStyles(styles)(Header);