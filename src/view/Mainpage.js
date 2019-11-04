import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import HomepageMainPhoto from "../components/HomepageMainPhoto";
import BlockView from "../components/BlockView";


class Mainpage extends Component {
  render() {
    return (
      <Fragment>
        <HomepageMainPhoto/>
        <BlockView/>
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
