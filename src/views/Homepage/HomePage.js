import React from 'react';

import PageWrapper from '../../components/PageWrapper';

import HomepageMainPhoto from '../../components/HomepageMainPhoto';
import BlockView from "../../components/BlockView";
import BlockViewWithImage from "../../components/BlockViewWithImage";
import BlockViewWithImage_2 from "../../components/BlockViewWithImage_2";
import OpinionsContainer from "../../components/OpinionsContainer";
import ContactContainer from "../../components/ContactContainer";
import MenuComponent from "../../components/MenuComponent";
import PropTypes from "prop-types";


const Homepage = (props) => (
  <PageWrapper>
    <div className={props.classes.mainContainer}>
      <div className={props.classes.menuHomepage}>
        <MenuComponent/>
      </div>
      <div className={props.classes.webRightContent}>
        <HomepageMainPhoto/>
        <BlockView/>
        <BlockViewWithImage/>
        <BlockViewWithImage_2/>
        <OpinionsContainer/>
        <ContactContainer/>
      </div>
    </div>
  </PageWrapper>
);


Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

Homepage.displayName = 'Homepage';

export default Homepage;
