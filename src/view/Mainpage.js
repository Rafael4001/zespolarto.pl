import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import HomepageMainPhoto from "../components/HomepageMainPhoto";
import BlockView from "../components/BlockView";
import BlockViewWithImage from "../components/BlockViewWithImage";
import BlockViewWithImage_2 from "../components/BlockViewWithImage_2";
import OpinionsContainer from "../components/OpinionsContainer";


class Mainpage extends Component {
  render() {
    return (
      <Fragment>
        <HomepageMainPhoto/>
        <BlockView/>
        <BlockViewWithImage/>
        <BlockViewWithImage_2/>
        <OpinionsContainer/>
      </Fragment>
    )
  }
}

Mainpage.propTypes = {
  classes: PropTypes.object.isRequired,
};

Mainpage.defaultProps = {};

Mainpage.displayName = 'Mainpage';


export default Mainpage;
