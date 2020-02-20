import { withStyles } from '@material-ui/core/styles';

import TrackContainer from './TrackContainer'
import { COLORS } from "../../constants";


const styles = {
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '0.1rem',
    padding: '0.1rem',
    backgroundColor: `${COLORS.red.medium}`,
    color: "#FFF",
  },
  myButton: {
    width: '1rem',
    padding: '0.1rem',
  },
  buttonIcon: {
    fontSize: '2rem',
    color: '#FFF',
  },
  songImage: {
    display: 'flex',
    width: '3rem',
    height: '3rem',
  },
  activeBackground: {
    backgroundColor: '#d81a1aeb',
  },
  trackName: {
    fontSize: '1.1rem',
  },
  trackArtistText: {
    fontSize: '0.8rem',
    color: COLORS.grey.dark
  }
};

export default withStyles(styles)(TrackContainer);
