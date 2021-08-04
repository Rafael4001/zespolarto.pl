import {withStyles} from '@material-ui/core/styles';

import HomepageMainPhoto from './HomepageMainPhoto'
import {MARGIN_TOP_UNDER_MENU} from "../../constants";


const styles = (theme) => ({

  mainContainer: {
    display: ' grid',
    gridTemplateColumns: '1fr',
    width: '100%',
    alignItems: 'center',
    paddingBottom: '1rem',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1.5fr',
    },
  },
  logoContainer: {
    width: '100%',
    display: ' flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  logo: {
    position: 'absolute',
    top: '0.5rem',
    width: '30rem',
    zIndex: 20,
    marginLeft: '15rem',
  },
  textContainer: {
    backgroundColor: '#FFFFFF',
    padding: '1rem',

    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },

  },
  subTitle: {
    fontSize: '2rem',
    fontFamily: 'Parisienne',
    fontWeight: 500,

    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  subTitleLeft: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  loversImageContainerMain: {
    display: 'flex',
    justifyContent: 'center',
    width: '6rem'

  },
  loversImageContainer: {
    position: "relative",
    width: '6rem',

    [theme.breakpoints.up('md')]: {
      width: '11rem',
    },
  },
  photoContainerMain: {
    display: 'flex',
    justifyContent: 'center',
  },
  photoContainer: {
    position: "relative",
    width: '100%',
  }
});

export default withStyles(styles)(HomepageMainPhoto);
