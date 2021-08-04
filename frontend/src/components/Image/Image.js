import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import ImageNext from "next/image";

const Image = (props) => {
  const {imgSrc, classes} = props;

  return (
    <ImageNext
      src={imgSrc}
      alt={'photo 1'}
      className={classNames(classes.image, props.className)}
      width={75}
      height={75}
    />
  )
};

Image.propTypes = {
  classes: PropTypes.object.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

Image.displayName = 'Image';

export default Image;
