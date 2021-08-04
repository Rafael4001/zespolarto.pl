import { withStyles } from '@material-ui/core/styles';
import Image from './Image';


const styles = () => ({
  mainContainer: {
    width: '20rem',
  },
  image:{
    width: '100%',
  }
});

export default withStyles(styles)(Image);
