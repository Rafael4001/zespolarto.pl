import React from 'react';
import PropTypes from 'prop-types';

const SongImage = (props) => {
  const {imgSrc, classes}=props;

  return(
    <div className={classes.mainContainer}>
      <img
        src={imgSrc}
        alt={'photo 1'}
        className={classes.image}
      />
    </div>
  )
};

SongImage.propTypes = {
  classes: PropTypes.object.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

SongImage.displayName = 'SongImage';

export default SongImage;
