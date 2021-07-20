import {withStyles} from '@material-ui/core/styles';

import MenuItem from './MenuItem'
import {COLORS} from "../../colors";


const styles = (theme) => ({
  mainContainer: {

    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem',
    },

    height: '3rem',
    border: 'none',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    padding: '0 2rem',
    margin: '0.2rem 0.2rem',
    borderBottom: `solid 1px ${COLORS.grey.light}`,
    outline: 'none',


    '&:hover': {
      transition: '0.7s',
      color: COLORS.red.main,
      borderBottom: `solid 1px ${COLORS.red.main}`,
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },

  },
  navItem: {
    border: 'none',
    height: '3rem',
    margin: '0.2rem 0.2rem',
    display: 'flex',
    outline: 'none',
    padding: '0 2rem',
    alignItems: 'center',
    borderBottom: 'solid 1px #F2F2F2',
    backgroundColor: '#fff',

    fontSize: '1.3rem',
    fontWeight: 300,
    fontFamily: '\'Baskervville\',serif',

    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      borderBottom: `solid ${COLORS.red.main} 1px`,
    },
  },
  activeLink: {
    color: COLORS.red.main,
    borderBottom: `solid ${COLORS.red.main} 1px`,
  }
});

export default withStyles(styles)(MenuItem);
