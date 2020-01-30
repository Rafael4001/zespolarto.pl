import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import Footer from "../../components/Footer/Footer.style";


const Media = (props) => (
  <PageWrapper>
    <Footer/>
  </PageWrapper>
);


Media.propTypes = {
  classes: PropTypes.object.isRequired,
};

Media.displayName = 'Media';

export default Media;
