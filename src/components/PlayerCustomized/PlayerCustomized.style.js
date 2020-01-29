import { withStyles } from '@material-ui/core/styles';
import PlayerCustomized from './PlayerCustomized'
import { COLORS, IMAGE_1, MARGIN_TOP_UNDER_MENU } from "../../constants";


const styles = (theme) => (
  {
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: MARGIN_TOP_UNDER_MENU,

      [theme.breakpoints.up('sm')]: {
        marginTop: 0,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '1rem',
      }

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
    trackList: {
      height: '80vh',

      [theme.breakpoints.up('sm')]: {
        overflowY: 'auto',
      },
    },
    actualImage: {
      height: '10rem',

      [theme.breakpoints.up('sm')]: {
        height: '20rem'
      },
    },
    albumImageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: `solid 1px ${COLORS.grey.dark}`,
      padding: '1rem',
    },
    seekBarContainer: {
      width: '100%',
      maxWidth: '30rem',
      display: 'grid',
      gridTemplateColumns: '4rem auto',
      gridGap: '1rem',
    },
    seekBar: {
      width: '100%'

    }
  }
);

export default withStyles(styles)(PlayerCustomized);
