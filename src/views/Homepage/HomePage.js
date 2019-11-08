import React from 'react';

import PageWrapper from '../../components/PageWrapper';

import HomepageMainPhoto from '../../components/HomepageMainPhoto';
import BlockView from "../../components/BlockView";
import BlockViewWithImage from "../../components/BlockViewWithImage";
import BlockViewWithImage_2 from "../../components/BlockViewWithImage_2";
import OpinionsContainer from "../../components/OpinionsContainer";
import ContactContainer from "../../components/ContactContainer";
import PlayerCustomized from "../../components/PlayerCustomized";



const Homepage = (props) => (
  <PageWrapper>

    <HomepageMainPhoto/>
    <BlockView/>
    <BlockViewWithImage/>
    <BlockViewWithImage_2/>
    <OpinionsContainer/>
    <ContactContainer/>
    <PlayerCustomized/>
  </PageWrapper>
);

Homepage.displayName = 'Homepage';

export default Homepage;
