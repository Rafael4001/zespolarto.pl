import React, { Component } from 'react'
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';

import { IMAGE_3 } from "../../constants";


class BlockViewWithImage_2 extends Component {
  render() {
    const {classes} = this.props;


    return (
      <div className={this.props.classes.mainContainer}>
        <div>
          <Typography
            classes={{
              root: this.props.classes.text,
            }}>
            Zaufało nam już ponad 250 par młodych
            Kilkanaście lat doświadczenia, które zbudowały wiele pozytywnych wspomnień sprawiło, że doskonale wiemy jak poprowadzić Waszą uroczystość, tak jak sobie wymarzyliście...
            To z Tobą ustalamy jak ma wyglądać Twoje wesele...
            To dla Ciebie gramy...
          </Typography>

        </div>
        <div className={classes.photoContainer}>
          <img
            src={IMAGE_3}
            alt={'photo 1'}
            className={classes.photo}
          />
        </div>
      </div>
    )
  }
}

BlockViewWithImage_2.propTypes = {
  classes: PropTypes.object.isRequired,
};

BlockViewWithImage_2.defaultProps = {};

BlockViewWithImage_2.displayName = 'BlockViewWithImage_2';

export default BlockViewWithImage_2
