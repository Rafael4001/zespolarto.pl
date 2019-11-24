import React from 'react'
import PropTypes from "prop-types";

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import Button from "@material-ui/core/Button";

import { SONGS_IMAGES } from "../../constants";

import Image from "../Image";


const TrackContainer = (props) => {
  const {classes, track, actualPlayingTrack} = props;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.songImage}>
        <Image imgSrc={`${SONGS_IMAGES[track.imgSrc]}`}/>
      </div>
      {actualPlayingTrack === track.name ?
        (<Button
          className={classes.myButton}
          key={track.name}
          onClick={props.onClick}
        >
          <PauseCircleFilledIcon className={classes.buttonIcon}/>

        </Button>)
        :
        (<Button
          className={classes.myButton}
          key={track.name}
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
  actualPlayingTrack: PropTypes.string,
};

TrackContainer.displayName = 'TrackContainer';


export default TrackContainer
