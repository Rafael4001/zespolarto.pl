import {withStyles} from '@material-ui/core/styles';
import OpinionsContainer from './OpinionsContainer'
import {COLORS} from '../../colors'

const radiusCorner = '1.5rem';

const styles = () => ({
  buttonMoreContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem 1rem',
  },

  mediaCard: {
    border: `solid ${COLORS.grey.dark} 1px`,
    borderRadius: `0 ${radiusCorner} 0  ${radiusCorner}`,
    fontSize: '2rem',
    textAlign: 'center',
    margin: `15px`,
    fontFamily: 'Parisienne',

    boxShadow: '0 10px 16px 0 rgb(0 0 0 / 20%)',

    '&:hover': {
      backgroundColor: `${COLORS.grey.light}`
    },

  },
  photoCard: {
    width: '100%',
    borderRadius: `0 ${radiusCorner} 0 0`,
  },
  textContainer: {
    padding: '0.5rem',
  },
  text: {
    fontSize: '1.2rem',
    fontWeight: 300,
    fontFamily: '\'Baskervville\',serif',
  },

  names: {
    margin: 'auto',
    fontFamily: 'Parisienne',
    fontSize: '1.8rem'
  },

  quotationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  quotation: {
    fontSize: '1.2rem',
    fontFamily: 'Parisienne',
    margin: 'auto'
  },
  more: {
    fontSize: '1.2rem',
    fontFamily: 'Parisienne',
    margin: 'auto',
    textTransform: 'initial',
    fontWeight: 600
  },
  author: {
    fontSize: '0.8125rem',
    fontFamily: 'Parisienne',
  },
  titleContainer: {
    padding: '1.5rem 1rem',
    fontSize: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Parisienne',
  },
  leaf_icon: {
    width: '1.5rem',
  },

});

export default withStyles(styles)(OpinionsContainer);
