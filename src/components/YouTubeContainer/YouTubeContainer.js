import React, { Component } from 'react'
import PropTypes from "prop-types";


class YouTubeContainer extends Component {
  render() {
    const {classes} = this.props;


    return (
      <div className={classes.mainContainer}>
        <div className={classes.filmContainer}>
          <iframe
            className=" shadow  videoRC" src="https://www.youtube.com/watch?v=9mpSTdbNwg4"
            frameBorder="0"
            allowFullScreen
            alt="wesele_rok_2016">
          </iframe>
        </div>
        <div className={classes.textContainer}>

        </div>
      </div>
    )
  }
}

YouTubeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

YouTubeContainer.defaultProps = {};

YouTubeContainer.displayName = 'YouTubeContainer';

export default YouTubeContainer
