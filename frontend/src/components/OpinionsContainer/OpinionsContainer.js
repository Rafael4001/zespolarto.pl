import React, { Component } from 'react'
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';


class OpinionsContainer extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={this.props.classes.mainContainer}>
        <Typography classes={{root: this.props.classes.text,}}>Opinie już wkrótce</Typography>
      </div>
    )
  }
}

OpinionsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

OpinionsContainer.defaultProps = {};

OpinionsContainer.displayName = 'OpinionsContainer';

export default OpinionsContainer
