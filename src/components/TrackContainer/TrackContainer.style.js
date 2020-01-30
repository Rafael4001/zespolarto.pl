import { withStyles } from '@material-ui/core/styles';

import TrackContainer from './TrackContainer'
import { COLORS } from "../../constants";


const styles = {
  mainContainer:{
    display: 'flex',
    alignItems: 'center',
    margin: '0.1rem',
    padding: '0.1rem',
    backgroundColor: `${COLORS.red.medium}`,
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
    // backgroundColor: 'yellow',  //TODO naprawic tutaj BUGa z odtwarzaczem
  }
};

export default withStyles(styles)(TrackContainer);
