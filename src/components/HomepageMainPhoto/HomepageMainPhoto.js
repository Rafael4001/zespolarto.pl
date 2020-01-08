import React, { Component } from 'react'
import PropTypes from "prop-types";

import { IMAGE_1, LOGO } from '../../constants'
import Typography from "@material-ui/core/Typography";


class HomepageMainPhoto extends Component {

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.mainContainer}>
        <div className={this.props.classes.textContainer}>
          <Typography
            classes={{
              root: this.props.classes.subTitle1,
            }}>Twoje wesele...</Typography>
          <Typography
            classes={{
              root: this.props.classes.subTitle2,
            }}>Nasza muzyka</Typography>
        </div>
        <div className={classes.photoContainer}>
          <img
            src={IMAGE_1}
            alt={'backgroundPhoto'}
            className={classes.photo}
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
