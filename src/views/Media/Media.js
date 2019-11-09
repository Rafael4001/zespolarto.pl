import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import MenuComponent from "../../components/MenuComponent";



const Media = (props) => (
  <PageWrapper>
    <div className={props.classes.mainContainer}>
      <div className={props.classes.menuHomepage}>
        <MenuComponent/>
      </div>
      <div className={props.classes.webRightContent}>
        MEDIA już wkrótce
      </div>
    </div>
  </PageWrapper>
);


Media.propTypes = {
  classes: PropTypes.object.isRequired,
};

Media.displayName = 'Homepage';

export default Media;
