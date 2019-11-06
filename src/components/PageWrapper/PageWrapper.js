import React from 'react';
import PropTypes from 'prop-types';

const PageWrapper = ({ classes, children }) => (
  <div className={classes.pageWrapperOuter}>
    <div className={classes.pageWrapperInner}>{children}</div>
  </div>
);

PageWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

PageWrapper.displayName = 'PageWrapper';

export default PageWrapper;
