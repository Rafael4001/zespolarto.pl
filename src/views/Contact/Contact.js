import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import ContactContainer from "../../components/ContactContainer";



const Contact = (props) => (
  <PageWrapper>
    <div className={props.classes.bodyHomepage}>
      <ContactContainer/>
    </div>
  </PageWrapper>
);


Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

Contact.displayName = 'Contact';

export default Contact;
