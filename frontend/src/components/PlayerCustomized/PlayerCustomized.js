/* eslint-disable */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Media, Player, controls } from 'react-media-player'
import PlayPause from '../../mp3Player/withMediaProps'
import TrackContainer from '../TrackContainer'
import { SCREEN } from '../../constants'

import { Typography } from '@material-ui/core'
import { TRACK_LIST } from '../../trackList'
import { COLORS } from '../../colors'

const {
  CurrentTime,
  SeekBar,
  Duration
} = controls

class Panner {
  constructor ({ source, audioContext, panningAmount = 0 }) {
    this._source = source
    this._audioContext = audioContext
    this._initialPanningAmount = panningAmount
  }

  connect () {
    this._splitter = this._audioContext.createChannelSplitter(2)
    this._gainLeft = this._audioContext.createGain()
    this._gainRight = this._audioContext.createGain()
    this._merger = this._audioContext.createChannelMerger(2)
    this._source.connect(
      this._splitter,
      0,
      0
    )
    this._splitter.connect(
      this._gainLeft,
      0
    )
    this._splitter.connect(
      this._gainRight,
      1
    )
    this._gainLeft.connect(
      this._merger,
      0,
      0
    )
    this._gainRight.connect(
      this._merger,
      0,
      1
    )
    return this._merger
  }

  setPosition (amount) {
    this._gainLeft.gain.value = amount <= 0 ? 1 : 1 - amount
    this._gainRight.gain.value = amount >= 0 ? 1 : 1 + amount
  }
}

const tracks = TRACK_LIST

const PlayerCustomized = ({ className, classes }) => {
  const [actualPlayingTrackMp3Name, setActualPlayingTrackMp3Name] = useState(tracks[0].mp3Name)
  const [autoplay, setAutoplay] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [actualSongName, setActualSongName] = useState('')

  const connectSource = (source, audioContext) => {
    const panner = new Panner({ source, audioContext })
    return panner.connect()
  }

  const handleTrackClick = (track) => {
    setActualPlayingTrackMp3Name(track.mp3Name)
    setActualSongName(track.name)
    setAutoplay(true)
    setIsPlaying(true)
  }

  const getTrackList = () => (
    tracks.map(track => {
      return (
        <TrackContainer
          key={track.name}
          track={track}
          actualPlayingTrackMp3Name={actualPlayingTrackMp3Name}
          onClickPlay={() => handleTrackClick(track)}
        />
      )
    })
  )

  const showWhatSongIsPlaying = (song) => song.mp3Name === actualPlayingTrackMp3Name

  const playNextSong = () => {
    const actualSongIndex = tracks.findIndex(showWhatSongIsPlaying)
    const newSongIndex = actualSongIndex + 1
    const nextSong = tracks[newSongIndex]

    handleTrackClick(nextSong)
  }

  return (
    <div className={className}>
      <Media>
        <div className="mainContainer">
          <div className={classes.albumImageContainer}>
            <Typography
              className={classes.contactTextContainer}
              variant="h2"
            >Demo</Typography>

            <Typography
              className={classes.currentSong}>{actualSongName || 'Wybierz utwor'}</Typography>
            <PlayPause/>
            <div className={classes.seekBarContainer}>
              <div className={classes.playerTime}><CurrentTime/>/<Duration/></div>
              <div className={classes.seekBar}><SeekBar style={{ width: '100%' }}/></div>
            </div>
            <div className={classes.actualSongPlayer}>
              <Player
                src={`/mp3/${actualPlayingTrackMp3Name}.mp3`}
                connectSource={connectSource}
                useAudioObject
                autoPlay={autoplay}
                isPlaying={isPlaying}
                onEnded={playNextSong}
              />
            </div>
          </div>

          <div className={classes.trackListContainer}>
            {getTrackList()}
          </div>
        </div>
      </Media>
    </div>
  )
}

const StyledPlayerCustomized = styled(PlayerCustomized)`

  input[type=range] {
    width: 100%;
    margin: 12.8px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    background: rgba(180, 22, 22, 0.2);
    border: 1px solid #010101;
    border-radius: 10px;
    width: 100%;
    height: 8px;
    cursor: pointer;
  }

  input[type=range]::-webkit-slider-thumb {
    margin-top: -6px;
    width: 18px;
    height: 18px;
    background: ${COLORS.red.main};
    border: 1px solid ${COLORS.red.main};
    border-radius: 100%;
    cursor: pointer;
    -webkit-appearance: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
      // background: ${COLORS.red.main};
    -webkit-appearance: none;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    //background: #965fc2;
  }

  //input[type=range]::-moz-range-track {
  //  background: rgba(138, 77, 187, 0.6);
  //  border: 0.2px solid #010101;
  //  border-radius: 1.3px;
  //  width: 100%;
  //  height: 8.4px;
  //  cursor: pointer;
  //}

  //input[type=range]::-moz-range-thumb {
  //  width: 36px;
  //  height: 34px;
  //  background: #ffffff;
  //  border: 5.2px solid #c8aaaf;
  //  border-radius: 3px;
  //  cursor: pointer;
  //}

  //input[type=range]::-ms-track {
  //  background: transparent;
  //  border-color: transparent;
  //  border-width: 22.5px 0;
  //  color: transparent;
  //  width: 100%;
  //  height: 8.4px;
  //  cursor: pointer;
  //}

  //input[type=range]::-ms-fill-lower {
  //  background: #cab6de;
  //  border: 0.2px solid #010101;
  //  border-radius: 2.6px;
  //}

  //input[type=range]::-ms-fill-upper {
  //  background: rgba(138, 77, 187, 0.6);
  //  border: 0.2px solid #010101;
  //  border-radius: 2.6px;
  //}

  //input[type=range]::-ms-thumb {
  //  width: 36px;
  //  height: 34px;
  //  background: #ffffff;
  //  border: 5.2px solid #c8aaaf;
  //  border-radius: 3px;
  //  cursor: pointer;
  //  margin-top: 0px;
  //}

  //input[type=range]:focus::-ms-fill-lower {
  //  background: rgba(138, 77, 187, 0.6);
  //}

  //input[type=range]:focus::-ms-fill-upper {
  //  background: #965fc2;
  //}

  ///*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
  //how to remove the virtical space around the range input in IE*/
  //@supports (-ms-ime-align:auto) {
  //  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  //  input[type=range] {
  //    margin: 0;
  //    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  //  }
  //}
  //----------------------------------------------------------------------

  .mainContainer {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: ${SCREEN.M}) {
      margin-top: 2rem;
      margin-bottom: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
  }

,
`

PlayerCustomized.displayName = 'PlayerCustomized'

export default StyledPlayerCustomized
