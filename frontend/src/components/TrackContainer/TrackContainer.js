import React, { Component } from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';
import { withMediaProps } from 'react-media-player'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import Button from "@material-ui/core/Button";

import { SONGS_IMAGES } from "../../constants";

import Image from "../Image";


class TrackContainer extends Component {
  shouldComponentUpdate({media}) {
    return this.props.media.isPlaying !== media.isPlaying
  }

  handlePlayClick = () => {
    this.props.onClickPlay();
    this.props.media.play()
  };


  render() {
    const {classes, track, actualPlayingTrackMp3Name, media} = this.props;
    const trackImage = track.imgSrc ? track.imgSrc : SONGS_IMAGES.DefaultSongImage;

    return (
      <div className={classNames(
        classes.mainContainer,
        {[classes.activeBackground]: actualPlayingTrackMp3Name === track.mp3Name}
      )}>
        <div
          className={classes.songImage}
          onClick={(actualPlayingTrackMp3Name === track.mp3Name && media.isPlaying) ? media.pause : this.handlePlayClick}
        >
          <Image imgSrc={trackImage}/>
        </div>
        {actualPlayingTrackMp3Name === track.mp3Name && media.isPlaying ?
          (<Button
            className={classes.myButton}
            key={track.mp3Name}
            onClick={media.pause}
          >
            <PauseCircleFilledIcon className={classNames(
              classes.buttonIcon,
              classes.buttonIconActiveSong
            )}/>
          </Button>)
          :
          (<Button
            className={classes.myButton}
            key={track.mp3Name}
            onClick={this.handlePlayClick}
          >
            <PlayCircleFilledIcon className={classNames(
              classes.buttonIcon,
              {[classes.buttonIconActiveSong]: actualPlayingTrackMp3Name === track.mp3Name}
            )}/>
          </Button>)
        }
        <div>
          <div className={classes.trackName}>{track.name}</div>

          <div className={classes.trackArtistText}>({track.artist && ` - ${track.artist}`})</div>
        </div>
      </div>
    )
  }
}

TrackContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  track: PropTypes.object.isRequired,
  onClickPlay: PropTypes.func.isRequired,
  actualPlayingTrackMp3Name: PropTypes.string,
};

TrackContainer.displayName = 'TrackContainer';


export default withMediaProps(TrackContainer)
