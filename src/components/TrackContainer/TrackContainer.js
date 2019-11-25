import React from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import Button from "@material-ui/core/Button";

import { SONGS_IMAGES } from "../../constants";

import Image from "../Image";


const TrackContainer = (props) => {
  const {classes, track, actualPlayingTrackMp3Name} = props;

  return (
    <div className={classNames(classes.mainContainer, {[classes.activeBackground]: actualPlayingTrackMp3Name === track.name})}>
      <div className={classes.songImage}>
        <Image imgSrc={`${SONGS_IMAGES[track.imgSrc]}`}/>
      </div>
      {actualPlayingTrackMp3Name === track.mp3Name ?
        (<Button
          className={classes.myButton}
          key={track.mp3Name}
          onClick={props.onClick}
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
  actualPlayingTrackMp3Name: PropTypes.string,
};

TrackContainer.displayName = 'TrackContainer';


export default TrackContainer
