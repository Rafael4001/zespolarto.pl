import React, { Component } from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';

import { IMAGE_1, LOGO, LOVERS } from '../../constants'
import Typography from "@material-ui/core/Typography";


class HomepageMainPhoto extends Component {

  render() {
    const {classes} = this.props;

    return (
      <div>
        <div className={classes.mainContainer}>

          <div className={this.props.classes.textContainer}>
            <Typography classes={{root: this.props.classes.subTitle,}}>Twoje wesele...</Typography>
            <div className={classes.loversImageContainer}>
              <img
                src={LOVERS}
                alt={'backgroundPhoto'}
                className={classes.loversImageStyle}
              />
            </div>
            <Typography classes={{root: classNames(classes.subTitle, classes.subTitleLeft),}}>Nasza muzyka</Typography>
          </div>

          <div className={classes.photoContainer}>
            <img
              src={IMAGE_1}
              alt={'backgroundPhoto'}
              className={classes.photo}
            />
          </div>

        </div>
        <Divider/>
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
