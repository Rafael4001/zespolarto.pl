import { withStyles } from '@material-ui/core/styles';
import HomepageMainPhoto from './HomepageMainPhoto'


const styles = {
  mainContainer: {
    display: ' flex',
    justifyContent: 'center',
    width: '100%',
  },
  photoContainer: {
    maxWidth: '100%',
  }
};

export default withStyles(styles)(HomepageMainPhoto);
