import { withStyles } from '@material-ui/core/styles';

import TrackContainer from './TrackContainer'


const styles = {
  mainContainer:{
    display: 'flex',
    alignItems: 'center',
    margin: '0.1rem',
    padding: '0.1rem',
    backgroundColor: '#C11616',
    color: "#FFF",
  },
  myButton:{
    width: '1rem',
    padding: '0.1rem',
  },
  buttonIcon:{
    fontSize: '2rem',
    color: '#FFF',
  },
  songImage:{
    width: '3rem',
    height: '3rem',
  },
  activeBackground:{
    backgroundColor: '#ab1616',
  }
};

export default withStyles(styles)(TrackContainer);
