import React from 'react';

import PageWrapper from '../../components/PageWrapper';

import HomepageMainPhoto from '../../components/HomepageMainPhoto';
import DescriptionBlock from "../../components/DescriptionBlock";
import BandMembers from "../../components/BandMembers";
import BlockViewWithImage_2 from "../../components/BlockViewWithImage_2";
import OpinionsContainer from "../../components/OpinionsContainer";
import ContactContainer from "../../components/ContactContainer";
import Footer from "../../components/Footer";
import PropTypes from "prop-types";


const Homepage = (props) => (
  <PageWrapper>
    <div className={props.classes.bodyHomepage}>
      <HomepageMainPhoto/>
      <DescriptionBlock/>
      <BandMembers/>
      <BlockViewWithImage_2/>
      {/*<OpinionsContainer/>*/}
      <ContactContainer/>
      <Footer/>
      {/*To wstawic do stopki*/}
      {/*<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>*/}
    </div>
  </PageWrapper>
);


Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

Homepage.displayName = 'Homepage';

export default Homepage;
