import { withStyles } from '@material-ui/core/styles';

import TrackContainer from './TrackContainer'
import { COLORS } from "../../colors";


const styles = {
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '0.1rem',
    padding: '0.375rem',
    borderBottom: `solid 1px ${COLORS.grey.dark}`,
    fontFamily: '\'Baskervville\',serif',
  },
  myButton: {
    width: '1rem',
    padding: '0.1rem',
  },
  buttonIcon: {
    fontSize: '2.5rem',
    color: `${COLORS.red.medium}`,
    border: 'black',
  },
  buttonIconActiveSong: {
    color: `${COLORS.white.main}`,
  },
  songImage: {
    display: 'flex',
    width: '3rem',
    height: '3rem',
  },
  activeBackground: {
    backgroundColor: `${COLORS.red.main}`,
    color: `${COLORS.white.main}`
  },
  trackName: {
    fontSize: '1.1rem',
  },
  trackArtistText: {
    fontSize: '0.8rem',
  }
};

export default withStyles(styles)(TrackContainer);
