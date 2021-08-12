import React from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';

import {IMAGE_1, LOVERS} from '../../constants'
import Typography from "@material-ui/core/Typography";
import Image from 'next/image'


const HomepageMainPhoto = ({classes}) => (
  <div>
    <div className={classes.mainContainer}>

      <aside className={classes.textContainer}>
        <Typography classes={{root: classes.subTitle,}}>Twoje wesele...</Typography>
        <div className={classes.photoContainerMain}>
          <div className={classes.loversImageContainer}>
            <Image
              src={LOVERS}
              alt='lovers'
              layout="responsive"
              width={228}
              height={180}
              loading="eager"
            />
          </div>
        </div>
        <Typography classes={{root: classNames(classes.subTitle, classes.subTitleLeft),}}>Nasza muzyka</Typography>
      </aside>

      <div className={classes.photoContainerMain}>
        <div className={classes.photoContainer}>
          <Image
            src={IMAGE_1}
            alt={'Arto music band'}
            layout="responsive"
            width={1000}
            height={559}
            placeholder={() => <div style={{backgroundColor: 'red'}}/>}
            unoptimized={true}
          />
        </div>
      </div>
    </div>
    <Divider/>
  </div>
)

HomepageMainPhoto.propTypes = {
  classes: PropTypes.object.isRequired,
};

HomepageMainPhoto.defaultProps = {};

HomepageMainPhoto.displayName = 'HomepageMainPhoto';

export default HomepageMainPhoto
