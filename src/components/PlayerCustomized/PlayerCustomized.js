import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
import PlayPause from '../../mp3Player/withMediaProps'
import TrackContainer from "../TrackContainer";
import { SONGS_IMAGES } from "../../constants";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import Image from "../Image";
import { Typography } from "@material-ui/core";


const {
  CurrentTime,
  // Progress,
  SeekBar,
  Duration,
  Volume,
  // Fullscreen,
  MuteUnmute,
  // autoplay,
  // isPlaying
} = controls;


class Panner {
  constructor({source, audioContext, panningAmount = 0}) {
    this._source = source;
    this._audioContext = audioContext;
    this._initialPanningAmount = panningAmount;
  }

  connect() {
    this._splitter = this._audioContext.createChannelSplitter(2);
    this._gainLeft = this._audioContext.createGain();
    this._gainRight = this._audioContext.createGain();
    this._merger = this._audioContext.createChannelMerger(2);
    this._source.connect(
      this._splitter,
      0,
      0
    );
    this._splitter.connect(
      this._gainLeft,
      0
    );
    this._splitter.connect(
      this._gainRight,
      1
    );
    this._gainLeft.connect(
      this._merger,
      0,
      0
    );
    this._gainRight.connect(
      this._merger,
      0,
      1
    );
    return this._merger
  }

  setPosition(amount) {
    this._gainLeft.gain.value = amount <= 0 ? 1 : 1 - amount;
    this._gainRight.gain.value = amount >= 0 ? 1 : 1 + amount;
  }
}

const tracks = [
  {
    id: 0,
    name: 'Lato 99',
    mp3Name: 'Lato_99',
    artist: 'Naydis',
    imgSrc: 'Naydis',
  },
  {
    id: 1,
    name: 'Życie To Są Chwile',
    artist: 'Akcent',
    mp3Name: 'ZycieToSaChwile',
    imgSrc: 'Akcent',
  },
  {
    id: 2,
    name: 'Tressure',
    mp3Name: 'Tressure',
    imgSrc: 'Bruno_Mars',
  },
  {
    // id: 0,
    name: 'Lato 99',
    mp3Name: 'Lato_99',
    artist: 'Naydis',
    imgSrc: 'Naydis',
  },
  {
    // id: 1,
    name: 'Życie To Są Chwile',
    artist: 'Akcent',
    mp3Name: 'ZycieToSaChwile',
    imgSrc: 'Akcent',
  },
  {
    // id: 2,
    name: 'Tressure',
    mp3Name: 'Tressure',
    imgSrc: 'Bruno_Mars',
  },
  {
    // id: 1,
    name: 'Życie To Są Chwile',
    artist: 'Akcent',
    mp3Name: 'ZycieToSaChwile',
    imgSrc: 'Akcent',
  },
  {
    // id: 2,
    name: 'Tressure',
    mp3Name: 'Tressure',
    imgSrc: 'Bruno_Mars',
  },
  {
    // id: 1,
    name: 'Życie To Są Chwile',
    artist: 'Akcent',
    mp3Name: 'ZycieToSaChwile',
    imgSrc: 'Akcent',
  },
  {
    // id: 2,
    name: 'Tressure',
    mp3Name: 'Tressure',
    imgSrc: 'Bruno_Mars',
  },
  {
    // id: 2,
    name: 'Tressure',
    mp3Name: 'Tressure',
    imgSrc: 'Bruno_Mars',
  },
  {
    // id: 2,
    name: 'Tressure',
    mp3Name: 'Tressure',
    imgSrc: 'Bruno_Mars',
  },
  {
    // id: 2,
    name: 'Tressure',
    mp3Name: 'Tressure',
    imgSrc: 'Bruno_Mars',
  },
  {
    // id: 2,
    name: 'Tressure',
    mp3Name: 'Tressure',
    imgSrc: 'Bruno_Mars',
  },
];


class PlayerCustomized extends Component {
  state = {
    actualPlayingTrackMp3Name: tracks[0].mp3Name,
    autoplay: false,
    isPlaying: false,
    actualSongImage: '',
    actualSongName: '',
  };

  componentDidMount() {
    this.setState({
      actualSongImage: tracks[0].imgSrc
    })
  }


  _connectSource = (source, audioContext) => {
    this.panner = new Panner({source, audioContext});
    return this.panner.connect()
  };


  trackList = () => (
    tracks.map(track => {
      return (
        <TrackContainer
          key={track.mp3Name}
          track={track}
          actualPlayingTrackMp3Name={this.state.actualPlayingTrackMp3Name}
          onClickPlay={() => {
            return (
              this.setState({
                actualPlayingTrackMp3Name: track.mp3Name,
                actualSongName: track.name,
                autoplay: true,
                isPlaying: true,
                actualSongImage: track.imgSrc,
              })
            )
          }}
        />
      )
    })
  );

  playNextSong = () => {
    console.log('wlaczam kolejny numer')
  };


  render() {
    const {classes} = this.props;

    return (
      <Media ref={c => (this.media = c)}>
        <div className={classes.mainContainer}>
          <div className={classes.albumImageContainer}>
            <div className={classes.songImage}>
              <Image imgSrc={`${SONGS_IMAGES[this.state.actualSongImage]}`}/>
            </div>
            <Typography>{this.state.actualSongName ? this.state.actualSongName : 'Wybierz utwor'}</Typography>

            <PlayPause/>
            {/*<div className={classes.volumeContainer}>*/}
            {/*  <div className={classes.volumeText}><VolumeUpIcon/></div>*/}
            {/*  <Volume className={this.props.volume}/>*/}
            {/*</div>*/}
            <div className={classes.seekBarContainer} >
              <div className={classes.playerTime}><CurrentTime/>/<Duration/></div>
              <div className={classes.seekBar}><SeekBar style={{width: '100%'}}/></div>
            </div>
            <div className={classes.actualSongPlayer}>
              <Player
                ref={c => (this._player = c)}
                src={`/mp3/${this.state.actualPlayingTrackMp3Name}.mp3`}
                connectSource={this._connectSource}
                useAudioObject
                autoPlay={this.state.autoplay}
                isPlaying={this.state.isPlaying}
                onEnded={this.playNextSong}
              />
            </div>
          </div>

          <div className={classes.trackList}>
            {this.trackList()}
          </div>

        </div>
      </Media>

    )
  }
}

export default PlayerCustomized
