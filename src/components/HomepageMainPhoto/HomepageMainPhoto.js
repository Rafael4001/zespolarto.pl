import React, { Component } from 'react'
import PropTypes from "prop-types";

import { IMAGE_1 } from '../../constants'


class HomepageMainPhoto extends Component {

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.mainContainer}>
        <img
          src={IMAGE_1}
          alt={'dodane zdjęcie'}
          className={classes.photoContainer}
        />
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
