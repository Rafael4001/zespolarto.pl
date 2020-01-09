import { withStyles } from '@material-ui/core/styles';
import BlockViewWithImage_2 from './BlockViewWithImage_2'


const styles = (theme) => ({
  mainContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '1rem',

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  photoContainer: {
    padding: '1rem',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  text: {
    fontSize: '1rem',
    fontFamily: '\'Baskervville\',serif',
  },
  cytat: {
    fontSize: '1rem',
    fontFamily: '\'Courgette\', cursive',//TODO font zaladować
  },
  brideIcon: {
    width: '5rem',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  happyPairs: {
    fontSize: '1.5rem',
    fontWeight: 700,
  }
});

export default withStyles(styles)(BlockViewWithImage_2);
