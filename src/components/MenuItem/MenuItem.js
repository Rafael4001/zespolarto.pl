import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";


class MenuItem extends Component {
  render() {
    const {classes,title} = this.props;

    return (
      <div className={classes.mainContainer}>
        <Typography  className={classes.text}>{title}</Typography>
      </div>
    )
  }
}

MenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {};

MenuItem.displayName = 'MenuComponent';

export default MenuItem
