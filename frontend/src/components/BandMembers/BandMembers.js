import React, { Component } from 'react'
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { IMAGE_2 } from "../../constants";


const BAND_MEMBERS = [
  {
    name: 'Daria',
    description: 'wokal'
  },
  {
    name: 'Rafał',
    description: 'wokal, instrumenty klawiszowe, gitara'
  },
  {
    name: 'Adrian',
    description: 'wokal, gitara basowa'
  },
  {
    name: 'Tomasz',
    description: 'perkusja'
  },
];


class BandMembers extends Component {


  render() {
    const {classes} = this.props;

    const getMembers = (bandMembers) => (
      bandMembers.map((member) => (
        <div key={member.name} className={classes.memberContainer}>
          <Typography classes={{root: classes.textName,}}><strong>{member.name}</strong></Typography>
          <Typography classes={{root: classes.textName,}}><strong> - </strong></Typography>
          <Typography classes={{root: classes.textName}}>{member.description}</Typography>
        </div>
      ))
    );

    return (
      <div>
        <div className={this.props.classes.mainContainer}>
          <div className={classes.photoContainer}>
            <img
              src={IMAGE_2}
              alt={'zespół Arto'}
              className={classes.photo}
            />
          </div>

          <div className={classes.descriptionBandMembers}>
            <div className={classes.quotationContainer}>
              <Typography classes={{root: classes.quotation,}}>"Takt jest muzyką duszy."</Typography>
              <Typography classes={{root: classes.author,}}>-Anita Daniel</Typography>
            </div>
            <Divider/>
            <Typography classes={{root: classes.textName,}}>Skład zespołu:</Typography>
            {getMembers(BAND_MEMBERS)}
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
