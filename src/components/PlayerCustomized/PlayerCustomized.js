import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
import PlayPause from '../../mp3Player/withMediaProps'
import TrackContainer from "../TrackContainer";
import { MUSIC, SONGS_IMAGES } from "../../constants";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import AlbumIcon from '@material-ui/icons/Album';

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
    name: 'Do Tanńca Kawałek',
    mp3Name: 'do_tanca_kawalek',
    artist: 'Poparzeni kawą trzy',
    imgSrc: SONGS_IMAGES.Naydis,
  },
  {
    id: 1,
    name: 'Kici Kici miał',
    mp3Name: 'kici_kici_mial',
    artist: 'Marcus',
    // imgSrc: SONGS_IMAGES.Naydis,
  },
  {
    id: 2,
    name: 'Konik na biegunach',
    mp3Name: 'konik_na_biegunach',
    artist: 'Urszula',
    // imgSrc: SONGS_IMAGES.Naydis,
  },
  {
    id: 3,
    name: 'Mama ostrzegała',
    mp3Name: 'mama_ostrzegala',
    artist: 'Daj to głośniej',
    // imgSrc: SONGS_IMAGES.Naydis,
  },
  {
    id: 4,
    name: 'Miła ma',
    mp3Name: 'mila_ma',
    artist: 'Power Play',
    // imgSrc: SONGS_IMAGES.Naydis,
  },
  {
    id: 5,
    name: 'Miłość w Zakopanem',
    mp3Name: 'milosc_w_zakopanem',
    artist: 'Sławomir',
    // imgSrc: SONGS_IMAGES.Naydis,
  },
  {
    id: 6,
    name: 'Ona by tak chciała',
    mp3Name: 'ona_by_tak_chciala',
    artist: 'Ronnie Ferrari',
    // imgSrc: SONGS_IMAGES.Naydis,
  },
  {
    id: 7,
    name: 'Remedium',
    mp3Name: 'remedium',
    artist: 'Maryla Rodowicz',
    // imgSrc: SONGS_IMAGES.Naydis,
  },
  {
    id: 8,
    name: 'Sway',
    mp3Name: 'sway',
    artist: 'Michael Buble',
    // imgSrc: SONGS_IMAGES.Naydis,
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
          key={track.name}
          track={track}
          actualPlayingTrackMp3Name={this.state.actualPlayingTrackMp3Name}
          onClickPlay={() => {
            return (
              this.setState({
                actualPlayingTrackMp3Name: track.mp3Name,
                actualSongName: track.name,
                autoplay: true,
                isPlaying: true,
                actualSongImage: track.imgSrc ? track.imgSrc : SONGS_IMAGES.DefaultSongImage,
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
            <div className={classes.songImageContainer}>
              <Image
                imgSrc={this.state.actualSongImage}
                className={classes.actualImage}
              />
            </div>
            <Typography>{this.state.actualSongName ? this.state.actualSongName : 'Wybierz utwor'}</Typography>

            <PlayPause/>
            {/*<div className={classes.volumeContainer}>*/}
            {/*  <div className={classes.volumeText}><VolumeUpIcon/></div>*/}
            {/*  <Volume className={this.props.volume}/>*/}
            {/*</div>*/}
            <div className={classes.seekBarContainer}>
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
