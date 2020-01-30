import React, { Component } from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';
import { LEAF, PHOTO_CARD_IMAGE, VIDEO_CARD_IMAGE } from "../../constants";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'


class FilmPhotoChoice extends Component {
  render() {
    const {classes} = this.props;


    return (
      <div>
        <div className={classes.mediaHeader}>
          <Typography classes={{root: classes.textHeader,}}>Tutaj ukryliśmy nasze wspomnienia... </Typography>
          <img
            src={LEAF}
            alt={'leaf'}
            className={classes.info_icon}
          />
        </div>

        <div className={classes.mainContainer}>
          <div className={classNames(classes.mediaBookmark)}>
            <Link href={'./'}>
              <div className={classNames(classes.mediaCard)}>
                <div>
                  <img
                    src={VIDEO_CARD_IMAGE}
                    alt={'photo_video'}
                    className={this.props.classes.photoCard}
                  />
                </div>
                <div className={classes.textContainer}>
                  <Typography classes={{root: classes.text,}}>FILMY</Typography>
                  <div className={classes.quotationContainer}>
                    <Typography classes={{root: classes.quotation,}}>"Jeden moment potrafi zmienić całe życie."</Typography>
                    <Typography classes={{root: classes.author,}}>-Anonim</Typography>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={'./'}>
              <div className={classes.positionRelative}>
                <div className={classNames(classes.mediaCard)}>
                  <div>
                    <img
                      src={PHOTO_CARD_IMAGE}
                      alt={'photo_video'}
                      className={this.props.classes.photoCard}
                    />
                  </div>
                  <div className={classes.textContainer}>
                    <Typography classes={{root: classes.text,}}>ZDJĘCIA</Typography>
                    <div className={classes.quotationContainer}>
                      <Typography classes={{root: classes.quotation,}}>"Patrz oczyma, fotografuj sercem"</Typography>
                      <Typography classes={{root: classes.author,}}>-Dawid duChemin</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

FilmPhotoChoice.propTypes = {
  classes: PropTypes.object.isRequired,
};

FilmPhotoChoice.defaultProps = {};

FilmPhotoChoice.displayName = 'Film-PhotoChoice';

export default FilmPhotoChoice
