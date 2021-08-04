import React from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';
import Link from 'next/link'
import styled from 'styled-components';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Typography from "@material-ui/core/Typography";
import {COLORS} from '../../colors'
import Image from 'next/image'
import {SCREEN, SCREEN_SIZE} from '../../constants'

import {FACEBOOK_URL, FACEBOOK_ICON, LOGO_ON_THE_FLOWERS, LINKS, RAFAL_CIESIELCZUK_LINKED_IN} from "../../constants";

const Footer = ({ className}) => (
  <footer className={className}>
    <div className="mainContainer">
      <div className="logoContainer">
        <Link href={LINKS.HOME.HREF} passHref>
          <a>
            <Image width={45} height={40}
              src={LOGO_ON_THE_FLOWERS}
              alt={'logo zespolu Arto'}
              className="iconArto"
            />
          </a>
        </Link>
      </div>

      <div className="contactContainer">
        <Link href={LINKS.CONTACT.HREF} passHref>
          <a>
            <Typography className="contactTextContainer">Kontakt</Typography>
          </a>
        </Link>
      </div>

      <address className="detailsContainerText">
        <div
          className={classNames('phoneContainer', 'marginBottomContainer')}
        >
          <MailOutlineIcon/>
          <Typography className="footerText">e-mail</Typography>
          <a
            className="detailsContent"
            href="mailto:zespolarto@gmail.com?subject = Feedback&body = Message">zespolarto@gmail.com</a>
        </div>

        <div>
          <div className="phoneContainer">
            <PhoneIcon/>
            <Typography className="footerText">Rafał</Typography>
            <a
              className="detailsContent"
              href="tel:+48661204475">661 204 475</a>
          </div>
          <div className="phoneContainer">
            <PhoneIcon/>
            <Typography className="footerText">Adrian</Typography>
            <a
              className="detailsContent"
              href="tel:+48796642598">796 642 598</a>
          </div>
        </div>
      </address>

      <div className="socialMediaContainer">
        <a href={FACEBOOK_URL}
           target='_blank'
           rel="noreferrer"
        >
          <Image width={45} height={40} src={FACEBOOK_ICON} alt={'facebook'}/>
        </a>
      </div>
    </div>

    <div className="allRightsReservedContainer">
      <a href={RAFAL_CIESIELCZUK_LINKED_IN}
         target='_blank'
         rel="noreferrer"
      >
        R.C. &copy; 2020 All rights reserved
      </a>

      <div className="iconMessage">Icons made by <Link href="https://www.flaticon.com/authors/freepik"
                                                       title="Freepik">Freepik</Link> from <Link
        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</Link></div>
    </div>
  </footer>

)

const StyledFooter = styled(Footer)`
  padding: 1rem 1rem 0.2rem 1rem;
  border-top: solid 1px ${COLORS.grey.dark_1}; 

  @media (min-width: ${SCREEN.M}) {
    padding: 1rem;
  }

  .mainContainer {
    & a {
      text-decoration: none;
    }

    //background-color: rebeccapurple;
    border-bottom: 0.0625rem solid ${COLORS.grey.dark_1};
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    justify-items: center;
    @media (min-width: ${SCREEN.M}) {
      padding: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .socialMediaContainer {
    background: ${COLORS.white.main};
    border-radius: 100%;
    border: solid 1px ${COLORS.red.main};
    margin-bottom: 1rem;
  }

  .facebookIcon {
    width: 2.5rem;
    height: 2.5rem;
  }

  link {
    & a {
      text-decoration: none;
      color: ${COLORS.blue.main},
    }
  }

  .contactTextContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 2.3125rem;
    font-family: Parisienne;

    @media (min-width: ${SCREEN.M}) {
      fontSize: 1.8rem;
    }

    @media (min-width: ${SCREEN_SIZE.L}) {
      fontSize: 2.3125rem;
    }
  }

  .contactContainer {
    display: flex;
    align-items: center;
  }

  .logoContainer {
    display: none;

    @media (min-width: ${SCREEN.M}) {
      display: inherit;
    }
  }

  .iconArto {
    border-radius: 100%;
  }

  .phoneContainer {
    display: grid;
    grid-gap: 1rem 0;
    letter-spacing: 0.05rem;
    grid-template-columns: 2rem 4rem 1fr;
  }

  .footerText {
    letter-spacing: 0.05rem;
    font-family: Baskervville Serif;
  }

  .detailsContent {
    letter-spacing: 0.05rem;
    display: flex;
    align-items: center;
  }

  .marginBottomContainer {
    margin-bottom: 0.4rem;
  }

  .allRightsReservedContainer {
    display: flex;
    justify-content: space-between;
    font-size: 0.5rem;
    font-weight: 100;
    padding: 0.625rem 0;

    @media (min-width: ${SCREEN.M}) {
      font-size: 0.75rem;
    }

    & a {
      text: none;
      color: ${COLORS.grey.dark_1};
    }
  }

  .iconMessage {
    color: ${COLORS.grey.dark_1};

    & a {
      text-decoration: none;
      color: ${COLORS.grey.dark_1};
    }
  }

  .detailsContainerText {
    flex-grow: 0.5;
  }
`

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};

Footer.displayName = 'Footer';

export default StyledFooter
