import { withStyles } from '@material-ui/core/styles';
import BlockView from './BlockView'


const styles = {
  mainContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '3rem',
  },
  textContainer: {
    backgroundColor: '#FFFFFF',
    fontSize: '2rem',
    padding: '1rem',
  },
  subTitle1: {
    fontSize: '3.5rem',
    fontFamily: '\'Courgette\', cursive;',
    fontWeight: 700,
  },
  subTitle2: {
    fontSize: '3.5rem',
    fontFamily: '\'Courgette\', cursive;',
    fontWeight: 700,
    marginLeft: '7rem',
  },
  title2: {
    fontSize: '2rem',
    fontFamily: '\'Courgette\', cursive;',
    fontWeight: 500,
    padding: '1rem',
  },
  text: {
    fontSize: '1rem',
  },
};

export default withStyles(styles)(BlockView);
