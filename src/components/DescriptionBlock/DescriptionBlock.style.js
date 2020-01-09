import { withStyles } from '@material-ui/core/styles';
import DescriptionBlock from './DescriptionBlock'


const styles = (theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1rem 1rem',
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
    fontSize: '4rem',
    fontFamily: 'Parisienne',
    fontWeight: 500,

    [theme.breakpoints.up('sm')]: {
      fontSize: '6rem',
    },
  },
  text: {
    fontSize: '1rem',
    fontFamily: '\'Baskervville\',serif',
  },
});

export default withStyles(styles)(DescriptionBlock);
