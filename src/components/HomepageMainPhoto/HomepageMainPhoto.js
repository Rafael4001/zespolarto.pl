import React, { Component } from 'react'
import PropTypes from "prop-types";

import { IMAGE_1, LOGO } from '../../constants'


class HomepageMainPhoto extends Component {

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.mainContainer}>
        <img
          src={LOGO}
          alt={'arto'}
          className={classes.logo}
        />
        <div className={classes.photoContainer}>
          <img
            src={IMAGE_1}
            alt={'backgroundPhoto'}
          />
        </div>
      </div>
    )
  }
}

HomepageMainPhoto.propTypes = {
  classes: PropTypes.object.isRequired,
};

HomepageMainPhoto.defaultProps = {};

HomepageMainPhoto.displayName = 'HomepageMainPhoto';

export default HomepageMainPhoto
