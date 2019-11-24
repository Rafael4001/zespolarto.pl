import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
import PlayPause from '../../mp3Player/withMediaProps'
import TrackContainer from "../TrackContainer";
import { SONGS_IMAGES } from "../../constants";

import Image from "../Image";


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
    name: 'Lato-Naydis',
    imgSrc: 'song_1',
    artist: 'Naydis',
  },
  {
    id: 1,
    name: 'ZycieToSaChwile',
    imgSrc: 'song_2',
    artist: 'Akcent',
  },
  {
    id: 2,
    name: 'Tressure',
    imgSrc: 'song_3',
    artist: 'Bruno Mars',
  },
];


class PlayerCustomized extends Component {
  state = {
    actualPlayingTrack: tracks[0].name,
    autoplay: false,
    isPlaying: false,
    actualSongImage: '',
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
        <li>
          <TrackContainer
            track={track}
            actualPlayingTrack={this.state.actualPlayingTrack}
            onClick={() =>
              this.setState({   //change this place to the function
                actualPlayingTrack: track.name,
                autoplay: true,
                isPlaying: true,
                actualSongImage: track.imgSrc,
              })}
          />
        </li>
      )
    })
  );


  render() {
    const {classes} = this.props;

    return (
      <div>
        <div className={classes.songImage}>
          <Image imgSrc={`${SONGS_IMAGES[this.state.actualSongImage]}`}/>
        </div>

        <Media ref={c => (this.media = c)}>
          <div>
            <Player
              ref={c => (this._player = c)}
              src={`/mp3/${this.state.actualPlayingTrack}.mp3`}
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
      </div>


    )
  }
}

export default PlayerCustomized
