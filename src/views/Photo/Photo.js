import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import MenuComponent from "../../components/MenuComponent";



const Photo = (props) => (
  <PageWrapper>
    <div className={props.classes.mainContainer}>
      <div className={props.classes.menuHomepage}>
        <MenuComponent/>
      </div>
      <div className={props.classes.webRightContent}>
        PHOTO
      </div>
    </div>
  </PageWrapper>
);


Photo.propTypes = {
  classes: PropTypes.object.isRequired,
};

Photo.displayName = 'Homepage';

export default Photo;
