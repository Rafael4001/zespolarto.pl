import React, { Component } from 'react'
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';


class ContactContainer extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={this.props.classes.mainContainer}>
        {/*<Typography classes={{root: classes.text,}}>Kontak już wkrótce</Typography>*/}
      </div>
    )
  }
}

ContactContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

ContactContainer.defaultProps = {};

ContactContainer.displayName = 'ContactContainer';

export default ContactContainer
