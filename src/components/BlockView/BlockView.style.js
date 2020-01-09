import { withStyles } from '@material-ui/core/styles';
import BlockView from './BlockView'


const styles = (theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1rem 1rem',
    borderBottom: 'solid 0.05rem #6C7279',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: '#FFFFFF',
    fontSize: '2rem',
  },
  title: {
    fontSize: '6rem',
    fontFamily: 'Parisienne',
    fontWeight: 500,
  },
  text: {
    fontSize: '1rem',
    fontFamily: '\'Baskervville\',serif',
  },
});

export default withStyles(styles)(BlockView);
