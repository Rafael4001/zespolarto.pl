import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import ContactContainer from "../../components/ContactContainer";
import HomepageMeta from "../../components/HomepageMeta";



const Contact = () => (
  <PageWrapper>
    <HomepageMeta canonicalAddress={'/contact'}/>
    <ContactContainer/>
  </PageWrapper>
);


Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

Contact.displayName = 'Contact';

export default Contact;
