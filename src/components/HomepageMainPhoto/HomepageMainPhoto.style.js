import { withStyles } from '@material-ui/core/styles';

import HomepageMainPhoto from './HomepageMainPhoto'


const styles = (theme) => ({

  mainContainer: {
    display: ' grid',
    gridTemplateColumns: '1fr',
    width: '100%',
    alignItems: 'center',
    paddingBottom: '1rem',
    marginTop: '5rem',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1.5fr',
      marginTop: 0,
    },
  },
  logoContainer: {
    width: '100%',
    display: ' flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  photoContainer: {
    zIndex: 10,
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
    // color: 'radial-gradient(circle at 100px 100px, #5cabff, #000)',

    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  subTitleLeft: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  photo: {
    width: '100%',
  },
  loversImageStyle: {
    width: '6rem',
    [theme.breakpoints.up('md')]: {
      width: '10rem',
    },
  },
  loversImageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default withStyles(styles)(HomepageMainPhoto);
