import React, { Component } from 'react'
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';

import { SMILE, IMAGE_3 } from "../../constants";
import Divider from "@material-ui/core/Divider";


class PlayedWeddingInformationContainer extends Component {
  render() {
    const {classes} = this.props;


    return (
      <div>
        <div className={this.props.classes.mainContainer}>
          <div>
            <div className={this.props.classes.iconContainer}>
              <img
                src={SMILE}
                alt={'Bride'}
                className={classes.brideIcon}
              />
            </div>
            <div className={classes.text}>
              <p>Zaufało nam już <span className={classes.happyPairs}>ponad
                <span className={classes.happyPairsTextNUmber}> 250 </span>
                par młodych</span></p>
              Kilkanaście lat doświadczenia, które zbudowały wiele pozytywnych wspomnień sprawiło, że doskonale wiemy jak poprowadzić Waszą
              uroczystość,
              tak jak sobie wymarzyliście...

              <p> To z Wami ustalamy jak ma wyglądać Wasze wesele...</p>
              <p> To dla Was gramy...</p>
            </div>
          </div>
          <div className={classes.photoContainer}>
            <img
              src={IMAGE_3}
              alt={'photo 1'}
              className={classes.photo}
            />
          </div>
        </div>
        <Divider/>
      </div>
    )
  }
}

PlayedWeddingInformationContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

PlayedWeddingInformationContainer.defaultProps = {};

PlayedWeddingInformationContainer.displayName = 'PlayedWeddingInformationContainer';

export default PlayedWeddingInformationContainer
