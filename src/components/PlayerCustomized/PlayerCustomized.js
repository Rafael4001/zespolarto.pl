import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
import PlayPause from '../../mp3Player/withMediaProps'
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
  };

  _handlePannerChange = ({target}) => {
    const x = +target.value;
    const y = 0;
    const z = 1 - Math.abs(x);
    this.panner.setPosition(x, y, z)
  };

  _connectSource = (source, audioContext) => {
    this.panner = new Panner({source, audioContext});
    return this.panner.connect()
  };

  getBLabla=()=>(
    tracks.map(track => {
      return (
        <li>
          <button
            key={track.name}
            onClick={() =>
              this.setState({   //change this place to the function
                currentTrack: track.name,
                autoplay: true
              })}
          >
            {track.name}
          </button>
        </li>
      )
    })
  )
  render() {
    return (
      <Media ref={c => (this.media = c)}>
        <div>
          <Player
            ref={c => (this._player = c)}
            src={`/mp3/${this.state.currentTrack}.mp3`}
            connectSource={this._connectSource}
            useAudioObject
            autoPlay={this.state.autoplay}
            isPlaying={true}
            // onEnded={}
          />
          <div>
            <PlayPause/>
            {/*<CustomPlayPause />*/}
            <CurrentTime/>
            <SeekBar/>
            <Duration/>
            <MuteUnmute/>
            {/*<isPlaying/>*/}
          </div>
          <Volume className={this.props.volume}/>
          {/*<input   // this input is responsible for music balance input
            type="range"
            defaultValue="0"
            min="-1"
            max="1"
            step="any"
            onChange={this._handlePannerChange}

          />
          */}

          <ul>
            {this.getBLabla()}
          </ul>
        </div>
      </Media>
    )
  }
}

export default PlayerCustomized
