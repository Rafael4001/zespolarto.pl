import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import MenuComponent from "../../components/MenuComponent";
import PlayerCustomized from "../../components/PlayerCustomized";
import SongImage from "../../components/Image";
import { SONG_1 } from "../../constants";



const Demo = (props) => (
  <PageWrapper>
    <div className={props.classes.bodyHomepage}>
      <PlayerCustomized/>
    </div>
  </PageWrapper>
);


Demo.propTypes = {
  classes: PropTypes.object.isRequired,
};

Demo.displayName = 'Homepage';

export default Demo;
