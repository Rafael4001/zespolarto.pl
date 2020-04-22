import React from 'react';
import PropTypes from "prop-types";

const Error = ({classes, touched, message}) => {
  if (!touched) {
    return <div></div>
  }

  if (message) {
    return <div className={classes.errorMain}>{message}</div>
  }

  return null
}

Error.propTypes = {
  classes: PropTypes.object.isRequired,
};

Error.displayName = 'Error';

export default Error;
