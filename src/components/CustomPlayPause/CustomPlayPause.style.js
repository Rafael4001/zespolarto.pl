import { withStyles } from '@material-ui/core/styles';
import CustomPlayPause from './CustomPlayPause'


const styles = {
  main: {
    backgroundColor: 'red',
    fontSize: '2rem'
  }
};

export default withStyles(styles)(CustomPlayPause);
