import { withStyles } from '@material-ui/core/styles';
import BandMembers from './BandMembers'


const styles = (theme)=>({
  mainContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    padding: '1rem',

    [theme.breakpoints.up(750)]: {
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
    fontSize: '1rem',
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
