import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import FilmPhotoChoice from "../../components/Film-PhotoChoice";


const Media = () => (
  <PageWrapper>
    <FilmPhotoChoice/>
  </PageWrapper>
);


Media.propTypes = {
  classes: PropTypes.object.isRequired,
};

Media.displayName = 'Media';

export default Media;
