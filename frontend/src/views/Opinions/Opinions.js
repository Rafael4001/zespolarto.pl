import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import ContactContainer from "../../components/ContactContainer";
import HomepageMeta from "../../components/HomepageMeta";



const Opinions = () => (
  <PageWrapper>
    {/*<HomepageMeta canonicalAddress={'/contact'}/>*/}
    {/*<ContactContainer/>*/}
    Opinie
  </PageWrapper>
);


Opinions.propTypes = {
  classes: PropTypes.object.isRequired,
};

Opinions.displayName = 'Opinions';

export default Opinions;
