import { withStyles } from '@material-ui/core/styles';
import PlayerCustomized from './PlayerCustomized'
import { COLORS } from "../../colors";
import { MENU_MOBILE_HEIGHT } from "../../constants";


const styles = (theme) => ({
  // mainContainer: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   marginBottom: '1rem',
  //   width: '100%',
  //
  //   [theme.breakpoints.up('sm')]: {
  //     marginTop: '2rem',
  //     display: 'grid',
  //     gridTemplateColumns: '1fr 1fr',
  //     gridGap: '1rem',
  //   }
  // },
  currentSong: {
    fontFamily: '\'Baskervville\',serif',
    padding: '0 0 0.5rem 0',
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
    alignItems: 'center',
    fontSize: '1.2rem'
  },
  playerTime: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '5px'
  },
  songImageContainer: {
    height: '10rem',
    width: '15rem',

    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      maxWidth: '30rem',
      height: 'auto',
      maxHeight: '30rem',
    }
  },
  trackListContainer: {
    top: '10rem',
    height: '33rem',
    overflowY: 'scroll',
    paddingTop: '10.5rem',
    boxShadow: `0 1px 13px 1px ${COLORS.grey.dark_1}`,

    [theme.breakpoints.up('sm')]: {
      paddingTop: 0,
      overflowY: 'auto',
      height: '80vh',
    },
  },
  albumImageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 0.5rem 1rem 0.5rem',
    backgroundColor: `${COLORS.white.main}`,
    borderBottom: `solid 1px ${COLORS.grey.dark}`,
    position: 'fixed',
    top:  `${MENU_MOBILE_HEIGHT}`,
    // top: '4rem', //`${MENU_MOBILE_HEIGHT}`,
    width: '100%',
    zIndex: 100,

    [theme.breakpoints.up('sm')]: {
      border: `none`,
      position: 'inherit',
    },

  },
  seekBarContainer: {
    width: '100%',
    maxWidth: '30rem',
    display: 'grid',
    gridTemplateColumns: '4rem auto',
    gridGap: '1rem',
  },
  seekBar: {
    width: '90%'
  },
  contactTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '2.3125rem',
    paddingTop:'0.5rem',
    fontFamily: 'Parisienne',
  },
});

export default withStyles(styles)(PlayerCustomized);
