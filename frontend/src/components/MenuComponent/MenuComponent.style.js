import {withStyles} from '@material-ui/core/styles';

import MenuComponent from './MenuComponent'

import {COLORS} from "../../colors";


const styles = (theme) => ({
  mainContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: `0 0.1875rem 0.25rem -0.375rem ${COLORS.black.main}`,
    margin: '0 0 0.1rem 0'
  },
  menuContainer: {
    display: 'flex',
    margin: '0 2rem 0 0'
  },

  photoContainerMain: {
    [theme.breakpoints.down('sm')]: {
      width: '4rem'
    },
    width: '6rem'
  },
  photoContainer: {
    position: "relative",
    width: '100%',
    marginLeft: '2rem',
    transition: '0.1s',

    '&:hover': {
      transition: '0.3s',
      transform: 'scale(1.04)'
    },
  },

  logoMobileContainer: {
    position: "relative",
    display: 'flex',
    justifyContent: 'center',
    width: '3rem',
  },
  photo: {
    // width: '6rem',
  },
  logoMobile: {
    width: '3rem',
    // height: '3rem',
    margin: '0.125rem 0.5rem',
    borderRadius: '100%',
  },
  menuWeb: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  //TODO wywaloc to na dole
  menuMobile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: COLORS.white.main,
    boxShadow: `0 0.1875rem 0.25rem -0.375rem ${COLORS.black.main}`,

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

export default withStyles(styles)(MenuComponent);
