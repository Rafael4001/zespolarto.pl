import React, { Component } from 'react'
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';

import { SMILE, IMAGE_3 } from "../../constants";


class BlockViewWithImage_2 extends Component {
  render() {
    const {classes} = this.props;


    return (
      <div className={this.props.classes.mainContainer}>
        <div>
          <div className={this.props.classes.iconContainer}>
            <img
              src={SMILE}
              alt={'Bride'}
              className={classes.brideIcon}
            />
          </div>
          <Typography classes={{root: classes.text,}}>
            <p>Zaufało nam już <span className={classes.happyPairs}>ponad 250 par młodych</span></p>
            Kilkanaście lat doświadczenia, które zbudowały wiele pozytywnych wspomnień sprawiło, że doskonale wiemy jak poprowadzić Waszą uroczystość,
            tak jak sobie wymarzyliście...

            <p> To z Tobą ustalamy jak ma wyglądać Twoje wesele...</p>
            <p> To dla Ciebie gramy...</p>
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
