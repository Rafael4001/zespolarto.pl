import React, { Component } from 'react'
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import classNames from "classnames";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import { IMAGE_4, LOVERS } from "../../constants";
import Divider from "@material-ui/core/Divider";


class ContactContainer extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.mainContainer}>

        <div className={classes.photoContainer}>
          <img
            src={IMAGE_4}
            alt={'Arto_photo_4'}
            className={classes.photo}
          />
        </div>

        <div className={classes.dataContainer}>
          <div className={classes.photoLoversContainer}>
            <img
              src={LOVERS}
              alt={'Arto_LOVERS'}
              className={classes.photoLovers}
            />
          </div>

          <div>
            <div className={classNames(classes.subContainer, classes.textContactPage)}>
              <Typography className={classes.textContactPage}>e-mail</Typography>
              <div className={classes.emailIconContainer}>
                <MailOutlineIcon className={classes.textContactPage}/>
              </div>
              <a href="mailto:zespolarto@gmail.com?subject = Feedback&body = Message">zespolarto@gmail.com</a>
            </div>

            <Divider/>

            <div>
              <div className={classNames(classes.subContainer, classes.textContactPage)}>
                <Typography className={classes.textContactPage}>Rafał</Typography>
                <PhoneIcon className={classes.PhoneIcon}/>
                <a className={classes.phoneNumberText} href="tel:+48661204475">661 204 475</a>
              </div>
              <div className={classNames(classes.subContainer, classes.textContactPage)}>
                <Typography className={classes.textContactPage}>Adrian</Typography>
                <PhoneIcon className={classes.PhoneIcon}/>
                <a className={classes.phoneNumberText} href="tel:+48796642598">796 642 598</a>
              </div>
            </div>
          </div>
        </div>

        {/*Tutaj wstawić gdzie gramy w jakiej okolicy*/}

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
