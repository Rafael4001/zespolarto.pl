import { withStyles } from '@material-ui/core/styles';
import BandMembers from './BandMembers'
import { SCREEN_SIZE } from "../../constants";


const styles = (theme)=>({
  mainContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    padding: '1rem',

    [theme.breakpoints.up(SCREEN_SIZE.POINT_750)]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  photo: {
    width: '100%',
  },
  photoContainer: {
    padding: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    fontFamily: '\'Baskervville\',serif',
  },
  quotationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  quotation: {
    fontSize: '2.2rem',
    fontFamily: 'Parisienne',
  },
  author: {
    fontSize: '1rem',
    fontFamily: 'Parisienne',
  },
});

export default withStyles(styles)(BandMembers);
