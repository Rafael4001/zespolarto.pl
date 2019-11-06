import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// import HomepageMainPhoto from "../components/HomepageMainPhoto";
// import BlockView from "../components/BlockView";
// import BlockViewWithImage from "../components/BlockViewWithImage";
// import BlockViewWithImage_2 from "../components/BlockViewWithImage_2";
// import OpinionsContainer from "../components/OpinionsContainer";
// import ContactContainer from "../components/ContactContainer";


class MainPage extends Component {

  render() {
    return (
      <Fragment>
        {/*<HomepageMainPhoto/>*/}
        {/*<BlockView/>*/}
        {/*<BlockViewWithImage/>*/}
        {/*<BlockViewWithImage_2/>*/}
        {/*<OpinionsContainer/>*/}
        {/*<ContactContainer/>*/}
      </Fragment>
    )
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

MainPage.defaultProps = {};

MainPage.displayName = 'MainPage';


export default MainPage;
