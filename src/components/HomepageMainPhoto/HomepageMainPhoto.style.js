import { withStyles } from '@material-ui/core/styles';
import HomepageMainPhoto from './HomepageMainPhoto'


const styles = {
  mainContainer: {
    display: ' flex',
    justifyContent: 'center',
  },
  photoContainer: {
    // width: '10rem',
  }
};

export default withStyles(styles)(HomepageMainPhoto);
