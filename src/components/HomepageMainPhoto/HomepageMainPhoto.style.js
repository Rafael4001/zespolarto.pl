import { withStyles } from '@material-ui/core/styles';

import HomepageMainPhoto from './HomepageMainPhoto'


const styles = {
  mainContainer: {
    display: ' flex',
    // gridTemplateColumns: '1fr 1fr',
    // flexDirection: 'column',
    // justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    // position: 'relative',
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
    fontSize: '2rem',
    padding: '1rem',
  },
  subTitle1: {
    fontSize: '3rem',
    fontFamily: '\'Courgette\', cursive;',
    fontWeight: 700,
  },
  subTitle2: {
    fontSize: '3rem',
    // fontFamily: '\'Lobster\', regular;',
    fontFamily: '\'Dancing Script\', cursive;',
    // font-family: 'Dancing Script', cursive;
    fontWeight: 700,
    marginLeft: '7rem',
  },
  photo: {
    width: '100%',
  },
};

export default withStyles(styles)(HomepageMainPhoto);
