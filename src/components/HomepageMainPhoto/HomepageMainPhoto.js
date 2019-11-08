import React, { Component } from 'react'
import PropTypes from "prop-types";

import { IMAGE_1, LOGO } from '../../constants'


class HomepageMainPhoto extends Component {

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.mainContainer}>
        <div className={classes.logoContainer}>
          <img
            src={LOGO}
            alt={'arto'}
            className={classes.logo}
          />
        </div>

        <div>
          <img
            src={IMAGE_1}
            alt={'backgroundPhoto'}
            className={classes.photoContainer}
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
