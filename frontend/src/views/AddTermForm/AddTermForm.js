import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';


const AddTermForm = (props) => (
  <PageWrapper>
    Add Term Form
  </PageWrapper>
);


AddTermForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

AddTermForm.displayName = 'AddTermForm';

export default AddTermForm;
