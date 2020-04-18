import { withStyles } from '@material-ui/core/styles';
import PlayedWeddingInformationContainer from './PlayedWeddingInformationContainer'


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
    fontSize: '1.1rem',
    fontFamily: '\'Baskervville\',serif',
  },
  cytat: {
    fontSize: '1rem',
    fontFamily: '\'Courgette\', cursive',
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
  },
  happyPairsTextNUmber: {
    fontSize: '2rem',
    fontFamily: 'Parisienne',
  }
});

export default withStyles(styles)(PlayedWeddingInformationContainer);
