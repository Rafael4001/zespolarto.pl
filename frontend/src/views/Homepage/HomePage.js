import React from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress';

// import Index from '../../components/Index'
import HomepageMeta from '../../components/HomepageMeta'
import PageWrapper from '../../components/PageWrapper';
import HomepageMainPhoto from '../../components/HomepageMainPhoto';
import DescriptionBlock from "../../components/DescriptionBlock";
import BandMembers from "../../components/BandMembers";
import PlayedWeddingInformationContainer from "../../components/PlayedWeddingInformationContainer";
// import OpinionsContainer from "../../components/OpinionsContainer";
// import ContactContainer from "../../components/ContactContainer";


const Homepage = () => (
  <PageWrapper>
    <HomepageMeta canonicalAddress={''}/>
    <HomepageMainPhoto />
    <DescriptionBlock/>
    <BandMembers/>
    <PlayedWeddingInformationContainer/>
    {/*<OpinionsContainer/>*/}
    {/*<ContactContainer/>*/}
  </PageWrapper>
);

Homepage.displayName = 'Homepage';

export default Homepage;
