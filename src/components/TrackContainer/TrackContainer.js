import React from 'react'
import PropTypes from "prop-types";


const TrackContainer= (props)=> {
    const {classes, track} = props;

    return (
      <div className={classes.mainContainer}>
        {/*<div></div>*/}

        <button
          key={track.name}
          onClick={props.onClick}
        >
          play
        </button>
        {track.name}

      </div>
    )
};

TrackContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  track: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

TrackContainer.displayName = 'TrackContainer';


export default TrackContainer
