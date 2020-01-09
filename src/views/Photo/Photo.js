import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';


const Photo = (props) => (
  <PageWrapper>
    <div className={props.classes.bodyHomepage}>
      Photo
    </div>
  </PageWrapper>
);


Photo.propTypes = {
  classes: PropTypes.object.isRequired,
};

Photo.displayName = 'Photo';

export default Photo;
