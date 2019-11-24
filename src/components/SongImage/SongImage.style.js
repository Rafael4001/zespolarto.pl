import { withStyles } from '@material-ui/core/styles';
import SongImage from './SongImage';


const styles = (theme) => ({
  mainContainer: {
    width: '20rem',
  },
  image:{
    width: '100%',
  }
});

export default withStyles(styles)(SongImage);
