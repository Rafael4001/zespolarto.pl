import { withStyles } from '@material-ui/core/styles';

import HomepageMainPhoto from './HomepageMainPhoto'


const styles = {
  mainContainer: {
    display: ' flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  logoContainer: {
    width: '100%',
    display: ' flex',
    justifyContent: 'center',
  },
  photoContainer: {
    maxWidth: '100%',
    top: '-30rem',
  },
  logo: {
    width: '30rem',
  }
};

export default withStyles(styles)(HomepageMainPhoto);
