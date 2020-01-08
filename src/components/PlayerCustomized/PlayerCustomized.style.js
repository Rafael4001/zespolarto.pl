import { withStyles } from '@material-ui/core/styles';
import PlayerCustomized from './PlayerCustomized'
import { COLORS, IMAGE_1 } from "../../constants";


const styles = {
  mainContainer:{
    // width: '40rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem'
    // backgroundImage: `url(${IMAGE_1})`,

  },
  main: {
    backgroundColor: '#f5f5f5',
    width: '80%',

    trackListStyle: {
      listStyleType: 'none',
    },

    trackListItem: {
      textDecoration: 'none',
      margin: '2rem',
    },
  },
  volumeContainer: {
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  volume: {
    width: 50,
  },
  volumeText: {
    marginRight: '1rem',
  },
  actualSongPlayer: {
    display: 'grid',
    gridTemplateColumns: '5rem 6rem 1fr 1fr',
    alignItems: 'center',
  },
  playerToolsContainer: {
    display: 'flex',
    flexDirection: 'column',
    // gridTemplateColumns: '1fr 1fr 2fr',
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: ,
    fontSize: '1.2rem'
  },
  playerTime: {
    display: 'flex',
    flexDirection: 'row',
  },
  songImage: {
    width: '30rem',
    maxHeight: '30rem',
  },
  trackList:{
    height: '80vh',
    overflowY: 'auto'
  },
  albumImageContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `solid 1px ${COLORS.grey.dark}`,
    padding: '1rem',
  },
  seekBarContainer:{
    width: '30rem',
    display: 'grid',
    gridTemplateColumns: '4rem auto',
    gridGap: '1rem',
  },
  seekBar:{
    width: '100%'

  }
};

export default withStyles(styles)(PlayerCustomized);
