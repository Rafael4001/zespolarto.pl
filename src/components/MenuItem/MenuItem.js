import React, { Component } from 'react'
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'


class MenuItem extends Component {
  render() {
    const {classes, title, href} = this.props;

    return (
      <Link href={href}>
        <button className={classes.mainContainer}>
          <Typography className={classes.text}>{title}</Typography>
        </button>
      </Link>
    )
  }
}

MenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {};

MenuItem.displayName = 'MenuComponent';

export default MenuItem
