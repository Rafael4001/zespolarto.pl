import React, { Component } from 'react'
import PropTypes from "prop-types";

import classNames from "classnames";
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import Typography from '@material-ui/core/Typography';
import { FACEBOOK_URL, IMAGE_4, LUBLIN_MAP } from "../../constants";


class ContactContainer extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div>
        <div className={classes.mainContainer}>
          <div className={classes.photoContainer}>
            <img
              src={IMAGE_4}
              alt={'Arto_photo_4'}
              className={classes.photo}
            />
          </div>


          <div className={classes.dataContainer}>
            <Typography className={classes.contactTextContainer}>Kontakt</Typography>

            <div className={classNames(classes.subContainer, classes.textContactPage)}>
              <MailOutlineIcon className={classes.emailIconContainer}/>
              <Typography className={classNames(classes.textContactPageBold, classes.textSizeClass)}>e-mail</Typography>
              <a className={classNames(classes.detailsTextContent, classes.textSizeClass)} href="mailto:zespolarto@gmail.com?subject = Feedback&body = Message">zespolarto@gmail.com</a>
            </div>

            <div className={classNames(classes.subContainer, classes.textContactPage)}>
              <PhoneIcon className={classes.emailIconContainer}/>
              <Typography className={classNames(classes.textContactPageBold, classes.textSizeClass)}>Rafał</Typography>
              <a className={classNames(classes.detailsTextContent, classes.textSizeClass)} href="tel:+48661204475">661 204 475</a>
            </div>

            <div className={classNames(classes.subContainer, classes.textContactPage)}>
              <PhoneIcon className={classes.emailIconContainer}/>
              <Typography className={classNames(classes.textContactPageBold, classes.textSizeClass)}>Adrian</Typography>
              <a className={classNames(classes.detailsTextContent, classes.textSizeClass)} href="tel:+48796642598">796 642 598</a>
            </div>

            <div className={classNames(classes.FacebookMainContainer)}>
              <div className={classes.textContactContainer}>
                <Typography className={classes.textContactPage}>Chcesz poznać nas lepiej?</Typography>
                <Typography className={classes.textContactPageBold}>Zobacz nasz funpage na facebooku</Typography>
              </div>
              <div className={classes.facebookIconContainer}>
                <a target={'_blank'} href={FACEBOOK_URL}>
                  <FacebookIcon style={{color: '#3b5998'}} className={classes.facebookIcon}/>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className={this.props.classes.mainContainerMap}>
          <div className={classes.mapDetailsTextContainer}>
            <div>
              <Typography classes={{root: classes.titleLublinMap}}>Gramy w województwie lubelskim</Typography>
            </div>
            <Typography classes={{root: classes.textMapDescription,}}>
              Zespól pochodzi z malowniczej miejscowości Werbkowice
              ale możesz nas usłyszeć w całym województwie lubelskim.
            </Typography>
          </div>

          <div className={classes.mapContainer}>
            <img
              src={LUBLIN_MAP}
              alt={'Lubelskie 1'}
              className={classes.photoMap}
            />
          </div>
        </div>
      </div>
    )
  }
}

ContactContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

ContactContainer.displayName = 'ContactContainer';

export default ContactContainer
