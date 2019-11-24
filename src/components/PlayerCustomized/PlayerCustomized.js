import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
import PlayPause from '../../mp3Player/withMediaProps'
import CustomPlayPause from "../CustomPlayPause/CustomPlayPause";
import Typography from "@material-ui/core/Typography";
import TrackContainer from "../TrackContainer";
// import CustomPlayPause from "../CustomPlayPause";
// import MuteUnmute from './MuteUnmute'

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

// const {formatTime} = utils;


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
    name: 'Lato-Naydis',
    imgSrc: 'Lato-Naydis',
  },
  {
    id: 1,
    name: 'ZycieToSaChwile',
  },
  {
    id: 2,
    name: 'Tressure',
  },
];


class PlayerCustomized extends Component {
  state = {
    currentTrack: tracks[0].name,
    autoplay: false,
    isPlaying: false,
  };

  componentDidMount() {
    this.setState({})
  }


  _connectSource = (source, audioContext) => {
    this.panner = new Panner({source, audioContext});
    return this.panner.connect()
  };




  trackList = () => (
    tracks.map(track => {
      return (
        <li>
          <TrackContainer
            track={track}
            onClick={() =>
              this.setState({   //change this place to the function
                currentTrack: track.name,
                autoplay: true,
                isPlaying: true,
              })}
          />
        </li>
      )
    })
  )





  render() {
    const {classes} = this.props;


    return (
      <Media ref={c => (this.media = c)}>
        <div>
          <Player
            ref={c => (this._player = c)}
            src={`/mp3/${this.state.currentTrack}.mp3`}
            connectSource={this._connectSource}
            useAudioObject
            autoPlay={this.state.autoplay}
            isPlaying={this.state.isPlaying}
            onEnded={
              //tutaj zrobic wlaczanie kolejnego kawalka
              () => console.log('zakonczylem odtwarzanie')}
          />
          <div className={classes.volumeContainer}>
            <div className={classes.volumeText}>Volume</div>
            <Volume className={this.props.volume}/>
          </div>


          <div className={classes.playerToolsContainer}>
            <PlayPause/>
            {/*<CustomPlayPause />*/}
            <div className={classes.playerTime}>
              <CurrentTime/>{/*obecny czas*/}/<Duration/> {/*czas pozostały*/}
            </div>
            <SeekBar/>{/* aktualny moment utworu*/}
            {/*<MuteUnmute/>*/}
            {/*<isPlaying/>*/}

          </div>
          <ul>
            {this.trackList()}
          </ul>
        </div>
      </Media>
    )
  }
}

export default PlayerCustomized
