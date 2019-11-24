import { withStyles } from '@material-ui/core/styles';

import TrackContainer from './TrackContainer'


const styles = {
  mainContainer:{
    display: 'flex',
    alignItems: 'center',
  },
  myButton:{
    width: '1rem',
    padding: '0.1rem',
  },
  buttonIcon:{
    fontSize: '2rem',
  },
  songImage:{
    width: '5rem',
  },
};

export default withStyles(styles)(TrackContainer);
