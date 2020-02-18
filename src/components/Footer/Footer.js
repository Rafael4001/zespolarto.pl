import React, { Component } from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';
import Link from 'next/link'

import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typography from "@material-ui/core/Typography";

import { FACEBOOK_URL,  LOGO_ON_THE_FLOWERS, LINKS,  INFO_ICON, RAFAL_CIESIELCZUK_LINKED_IN } from "../../constants";


class Footer extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.footerContainer}>
        <div className={classes.mainContainer}>
          <div className={classes.logoContainer}>
            <Link href={LINKS.HOME.HREF}>
              <a>
                <img
                  src={LOGO_ON_THE_FLOWERS}
                  alt={'logo zespolu Arto'}
                  className={classes.iconArto}
                />
              </a>
            </Link>
          </div>

          <div className={classes.contactContainer}>
            <Link href={LINKS.CONTACT.HREF}>
              <a className={classes.contactTextContainer}>
              <img
                src={INFO_ICON}
                alt={'Bride'}
                className={classes.info_icon}
              />
              <Typography>KONTAKT</Typography>
              </a>
            </Link>
          </div>

          <div className={classNames(classes.phoneContainer, classes.marginBottomContainer)}>
            <Typography className={classes.phoneText}>e-mail</Typography>
            <MailOutlineIcon className={classes.PhoneIcon}/>
            <a className={classes.phoneText} href="mailto:zespolarto@gmail.com?subject = Feedback&body = Message">zespolarto@gmail.com</a>
          </div>

          <div>
            <div className={classNames(classes.phoneContainer, classes.marginBottomContainer)}>
              <Typography className={classes.phoneText}>Rafał</Typography>
              <PhoneIcon className={classes.PhoneIcon}/>
              <a className={classes.phoneText} href="tel:+48661204475">661 204 475</a>
            </div>
            <div className={classes.phoneContainer}>
              <Typography className={classes.phoneText}>Adrian</Typography>
              <PhoneIcon className={classes.PhoneIcon}/>
              <a className={classes.phoneText} href="tel:+48796642598">796 642 598</a>
            </div>
          </div>

          <div className={classes.socialMediaContainer}>
            <a href={FACEBOOK_URL} target={'_blank'} className={classes.socialLink}>
              <FacebookIcon className={classes.facebookIcon}/>
            </a>
          </div>
        </div>
        <a
          className={classes.rightsContainer}
          href={RAFAL_CIESIELCZUK_LINKED_IN}
          target={'_blank'}
        >
          R.C. &copy; 2020 All rights reserved
        </a>
        <div className={classes.iconMessageContainer}>
          <div className={classes.iconMessage}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
            href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

Footer.defaultProps = {};

Footer.displayName = 'ContactContainer';

export default Footer
