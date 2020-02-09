import React from 'react';
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';

import year2020 from '../../termsJSON/terminy2020';

import Months from "../../components/Months";

import PageWrapper from '../../components/PageWrapper';
import Footer from "../../components/Footer/Footer.style";

const YEAR_TITLE = "2020";

const Terms = (props) => (
  <div>
    <Typography type={'h2'}>Rok {YEAR_TITLE}</Typography>
    <Months table={year2020} year={YEAR_TITLE}/>
  </div>
);


Terms.propTypes = {
  classes: PropTypes.object.isRequired,
};

Terms.displayName = 'Terms';

export default Terms;
