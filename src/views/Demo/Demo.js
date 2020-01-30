import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import PlayerCustomized from "../../components/PlayerCustomized";
import Footer from "../../components/Footer/Footer.style";



const Demo = (props) => (
  <PageWrapper>
    <div className={props.classes.bodyHomepage}>
      <PlayerCustomized/>
      <Footer/>
    </div>
  </PageWrapper>
);


Demo.propTypes = {
  classes: PropTypes.object.isRequired,
};

Demo.displayName = 'Demo';

export default Demo;
