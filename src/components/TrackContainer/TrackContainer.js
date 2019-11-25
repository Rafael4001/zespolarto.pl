import React from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';
import PlayPause from '../../mp3Player/withMediaProps'
import { withMediaProps } from 'react-media-player'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import Button from "@material-ui/core/Button";

import { SONGS_IMAGES } from "../../constants";

import Image from "../Image";


const TrackContainer = (props) => {
  const {classes, track, actualPlayingTrackMp3Name,media } = props;
console.log('media',media)
  this.props.media.isPlaying !== media.isPlaying


  return (
    <div className={classNames(classes.mainContainer, {[classes.activeBackground]: actualPlayingTrackMp3Name === track.name})}>
      <div className={classes.songImage}>
        <Image imgSrc={`${SONGS_IMAGES[track.imgSrc]}`}/>
      </div>
      {actualPlayingTrackMp3Name === track.mp3Name ?
        (<Button
          className={classes.myButton}
          key={track.mp3Name}
          onClick={media.pause}
        >
          <PauseCircleFilledIcon className={classes.buttonIcon}/>
        </Button>)
        :
        (<Button
          className={classes.myButton}
          key={track.mp3Name}
          onClick={props.onClick}
        >
          <PlayCircleFilledIcon className={classes.buttonIcon}/>
        </Button>)
      }
      {track.name}-
      {track.artist}
    </div>
  )
};

TrackContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  track: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onUnClick: PropTypes.func.isRequired,
  actualPlayingTrackMp3Name: PropTypes.string,
};

TrackContainer.displayName = 'TrackContainer';


export default withMediaProps (TrackContainer)
