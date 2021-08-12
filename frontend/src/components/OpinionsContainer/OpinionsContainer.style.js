import {withStyles} from '@material-ui/core/styles';
import OpinionsContainer from './OpinionsContainer'
import {COLORS} from '../../colors'

const radiusCorner = '1.5rem';

export const TALE_WIDTH=272

const styles = (theme) => ({
  mediaCard: {
    border: `solid ${COLORS.grey.dark} 1px`,
    borderRadius: `${radiusCorner} ${radiusCorner} 0 0`,
    fontSize: '2rem',
    textAlign: 'center',
    margin: `15px`,
    fontFamily: 'Parisienne',

    // boxShadow: '0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
    boxShadow: '0 10px 16px 0 rgb(0 0 0 / 20%)',
    // boxShadow: '1px 10px 16px 0 rgb(84 47 47 / 12%)',

    '&:hover': {
      backgroundColor: `${COLORS.grey.light}`
    },

    [theme.breakpoints.up('sm')]: {
      // width: '22rem',
    },
  },
  photoCard: {
    width: '100%',
    borderRadius: `${radiusCorner} ${radiusCorner} 0 0`,
  },
  textContainer: {
    padding: '0.5rem',
  },
  text: {
    fontSize: '1.2rem',
    fontWeight: 300,
    fontFamily: '\'Baskervville\',serif',
  },

  quotationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  quotation: {
    fontSize: '1.8rem',
    fontFamily: 'Parisienne',
  },
  author: {
    fontSize: '1rem',
    fontFamily: 'Parisienne',
  },


});

export default withStyles(styles)(OpinionsContainer);
