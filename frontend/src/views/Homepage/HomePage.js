import React from 'react';
import PropTypes from "prop-types";

import HomepageMeta from '../../components/HomepageMeta'
import PageWrapper from '../../components/PageWrapper';
import HomepageMainPhoto from '../../components/HomepageMainPhoto';
import DescriptionBlock from "../../components/DescriptionBlock";
import BandMembers from "../../components/BandMembers";
import PlayedWeddingInformationContainer from "../../components/PlayedWeddingInformationContainer";
import OpinionsContainer from "../../components/OpinionsContainer";
import ContactContainer from "../../components/ContactContainer";


const Homepage = () => (
  <PageWrapper>
    <HomepageMeta canonicalAddress={''}/>
    <HomepageMainPhoto/>
    <DescriptionBlock/>
    <BandMembers/>
    <PlayedWeddingInformationContainer/>
    {/*<OpinionsContainer/>*/}
    {/*<ContactContainer/>*/}
  </PageWrapper>
);


Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

Homepage.displayName = 'Homepage';

export default Homepage;
