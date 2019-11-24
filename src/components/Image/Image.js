import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const {imgSrc, classes}=props;

  return(
    <img
      src={imgSrc}
      alt={'photo 1'}
      className={classes.image}
    />
  )
};

Image.propTypes = {
  classes: PropTypes.object.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

Image.displayName = 'Image';

export default Image;
