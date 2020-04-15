import React from 'react';
import PropTypes from 'prop-types';
import MenuComponent from "../MenuComponent/MenuComponent.style";
import Footer from "../Footer/Footer.style";

const PageWrapper = ({classes, children}) => (
  <div className={classes.pageWrapperOuter}>
    <div className={classes.menuHomepage}><MenuComponent/></div>
    <div className={classes.pageWrapperInner}>
      {children}
      <Footer/>
    </div>
  </div>
);

PageWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

PageWrapper.displayName = 'PageWrapper';

export default PageWrapper;
