import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';

import HomepageMeta from '../../components/HomepageMeta'
import PageWrapper from '../../components/PageWrapper';
import HomepageMainPhoto from '../../components/HomepageMainPhoto';
import DescriptionBlock from "../../components/DescriptionBlock";
import BandMembers from "../../components/BandMembers";
import PlayedWeddingInformationContainer from "../../components/PlayedWeddingInformationContainer";
import OpinionsContainer from "../../components/OpinionsContainer";
import ContactContainer from "../../components/ContactContainer";


const Homepage = ({classes}) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div>
      {
        isLoading &&
          <div className={classes.loadingContainer}>
            <CircularProgress color="secondary"/>
            <span className={classes.loadingText}>Loading...</span>
          </div>
      }

      <PageWrapper>
        <HomepageMeta canonicalAddress={''}/>
        <HomepageMainPhoto setIsLoading={setIsLoading}/>
        <DescriptionBlock/>
        <BandMembers/>
        <PlayedWeddingInformationContainer/>
        {/*<OpinionsContainer/>*/}
        {/*<ContactContainer/>*/}
      </PageWrapper>
    </div>


  )
};


Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

Homepage.displayName = 'Homepage';

export default Homepage;
