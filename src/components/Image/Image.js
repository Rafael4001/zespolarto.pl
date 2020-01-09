import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

const Image = (props) => {
  const {imgSrc, classes} = props;

  return (
    <img
      src={imgSrc}
      alt={'photo 1'}
      className={classNames(classes.image, props.className)}
    />
  )
};

Image.propTypes = {
  classes: PropTypes.object.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

Image.displayName = 'Image';

export default Image;
