import { withStyles } from '@material-ui/core/styles';

import HomepageMainPhoto from './HomepageMainPhoto'


const styles = {
  mainContainer: {
    display: ' flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
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
    marginLeft: '6rem',

  }
};

export default withStyles(styles)(HomepageMainPhoto);
