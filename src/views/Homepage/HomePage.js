import React from 'react';

import PageWrapper from '../../components/PageWrapper';

import HomepageMainPhoto from '../../components/HomepageMainPhoto';
import DescriptionBlock from "../../components/DescriptionBlock";
import BandMembers from "../../components/BandMembers";
import PlayedWeddingInformationContainer from "../../components/PlayedWeddingInformationContainer";
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
      <PlayedWeddingInformationContainer/>
      {/*<OpinionsContainer/>*/}
      {/*<ContactContainer/>*/}
      <Footer/>
    </div>
  </PageWrapper>
);


Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

Homepage.displayName = 'Homepage';

export default Homepage;
