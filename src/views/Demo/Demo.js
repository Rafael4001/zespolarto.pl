import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import MenuComponent from "../../components/MenuComponent";



const Demo = (props) => (
  <PageWrapper>
    <div className={props.classes.mainContainer}>
      <div className={props.classes.menuHomepage}>
        <MenuComponent/>
      </div>
      <div className={props.classes.webRightContent}>
        DEMO już wkrótce
      </div>
    </div>
  </PageWrapper>
);


Demo.propTypes = {
  classes: PropTypes.object.isRequired,
};

Demo.displayName = 'Homepage';

export default Demo;
