import React from 'react';
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";

import PageWrapper from '../../components/PageWrapper';
import PlayerCustomized from "../../components/PlayerCustomized";



const Demo = ({classes}) => (
  <PageWrapper>
    <div className={classes.titleContainer}>
      <Typography className={classes.contactTextContainer}>Demo</Typography>
    </div>

    <PlayerCustomized/>
  </PageWrapper>
);


Demo.propTypes = {
  classes: PropTypes.object.isRequired,
};

Demo.displayName = 'Demo';

export default Demo;
