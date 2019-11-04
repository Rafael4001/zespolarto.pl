import React, { Component } from 'react'
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { IMAGE_2 } from "../../constants";


class BlockViewWithImage extends Component {
  render() {
    const {classes} = this.props;


    return (
      <div className={this.props.classes.mainContainer}>
        <div className={classes.photoContainer}>
          <img
            src={IMAGE_2}
            alt={'photo 1'}
            className={classes.photo}
          />
        </div>
        <div>
          <Typography
            classes={{
              root: this.props.classes.text,
            }}>
            "Takt jest muzyką duszy."
            -Anita Daniel
          </Typography>
          <Divider/>
          <Typography classes={{root: this.props.classes.text,}}>Skład zespołu:</Typography>
          <Typography classes={{root: this.props.classes.text,}}>- Daria - wokal</Typography>
          <Typography classes={{root: this.props.classes.text,}}>- Adrian - gitara basowa, wokal</Typography>
          <Typography classes={{root: this.props.classes.text,}}>- Rafał - instrumenty klawiszowe, gitara, wokal</Typography>
          <Typography classes={{root: this.props.classes.text,}}>- Tomek - perkusja</Typography>
        </div>
      </div>
    )
  }
}

BlockViewWithImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

BlockViewWithImage.defaultProps = {};

BlockViewWithImage.displayName = 'BlockView';

export default BlockViewWithImage
