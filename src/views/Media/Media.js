import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import Footer from "../../components/Footer/Footer.style";
import FilmPhotoChoice from "../../components/Film-PhotoChoice";


const Media = (props) => (
  <PageWrapper>
    <FilmPhotoChoice/>
    <Footer/>
  </PageWrapper>
);


Media.propTypes = {
  classes: PropTypes.object.isRequired,
};

Media.displayName = 'Media';

export default Media;
