import React, { Component } from 'react'
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { IMAGE_2 } from "../../constants";


class BandMembers extends Component {
  render() {
    const {classes} = this.props;


    return (
      <div>
        <div className={this.props.classes.mainContainer}>
          <div className={classes.photoContainer}>
            <img
              src={IMAGE_2}
              alt={'photo 1'}
              className={classes.photo}
            />
          </div>

          <div>
            <div className={classes.quotationContainer}>
              <Typography classes={{root: classes.quotation,}}>"Takt jest muzyką duszy."</Typography>
              <Typography classes={{root: classes.author,}}>-Anita Daniel</Typography>
            </div>
            <Divider/>
            <Typography classes={{root: classes.text,}}>Skład zespołu:</Typography>
            <Typography classes={{root: classes.text,}}><strong>Daria</strong> - wokal</Typography>
            <Typography classes={{root: classes.text,}}><strong>Rafał</strong> - wokal, instrumenty klawiszowe, gitara</Typography>
            <Typography classes={{root: classes.text,}}><strong>Adrian</strong> - wokal,gitara basowa</Typography>
            <Typography classes={{root: classes.text,}}><strong>Tomasz</strong> - perkusja</Typography>
          </div>
        </div>
        <Divider/>
      </div>
    )
  }
}

BandMembers.propTypes = {
  classes: PropTypes.object.isRequired,
};

BandMembers.defaultProps = {};

BandMembers.displayName = 'BandMembers';

export default BandMembers
