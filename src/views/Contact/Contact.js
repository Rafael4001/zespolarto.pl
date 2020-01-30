import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import ContactContainer from "../../components/ContactContainer";
import Footer from "../../components/Footer";



const Contact = (props) => (
  <PageWrapper>
    <ContactContainer/>
    <Footer/>
  </PageWrapper>
);


Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

Contact.displayName = 'Contact';

export default Contact;
