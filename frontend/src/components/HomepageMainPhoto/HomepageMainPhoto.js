import React, { useEffect} from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';

import {IMAGE_1, LOVERS} from '../../constants'
import Typography from "@material-ui/core/Typography";


const HomepageMainPhoto = ({classes, setIsLoading}) => {

  useEffect(() => {
    setIsLoading(false)
  }, [])


  return (
    <div>
      <div className={classes.mainContainer}>

        <aside className={classes.textContainer}>
          <Typography classes={{root: classes.subTitle,}}>Twoje wesele...</Typography>
          <div className={classes.loversImageContainer}>
            <img
              src={LOVERS}
              alt={'lovers'}
              className={classes.loversImageStyle}
            />
          </div>
          <Typography classes={{root: classNames(classes.subTitle, classes.subTitleLeft),}}>Nasza muzyka</Typography>
        </aside>

        <div className={classes.photoContainer}>
          <img
            src={IMAGE_1}
            alt={'zespół Arto'}
            className={classes.photo}
          />
        </div>

      </div>
      <Divider/>
    </div>
  )
}

HomepageMainPhoto.propTypes = {
  classes: PropTypes.object.isRequired,
};

HomepageMainPhoto.defaultProps = {};

HomepageMainPhoto.displayName = 'HomepageMainPhoto';

export default HomepageMainPhoto
