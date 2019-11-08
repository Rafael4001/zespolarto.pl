import React from 'react';

import PageWrapper from '../../components/PageWrapper';

import HomepageMainPhoto from '../../components/HomepageMainPhoto';
import BlockView from "../../components/BlockView";
import BlockViewWithImage from "../../components/BlockViewWithImage";
import BlockViewWithImage_2 from "../../components/BlockViewWithImage_2";
import OpinionsContainer from "../../components/OpinionsContainer";
import ContactContainer from "../../components/ContactContainer";
import PlayerCustomized from "../../components/PlayerCustomized";
import MenuComponent from "../../components/MenuComponent";
import PropTypes from "prop-types";


const Homepage = (props) => (
  <PageWrapper>
    <div className={props.classes.mainContainer}>
        <MenuComponent/>
        <HomepageMainPhoto/>
    </div>
    <BlockView/>
    <BlockViewWithImage/>
    <BlockViewWithImage_2/>
    <OpinionsContainer/>
    <ContactContainer/>
    <PlayerCustomized/>
  </PageWrapper>
);


Homepage.propTypes = {
    classes: PropTypes.object.isRequired,
};

Homepage.displayName = 'Homepage';

export default Homepage;
