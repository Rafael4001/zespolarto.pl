import { withStyles } from '@material-ui/core/styles';
import BlockView from './BlockView'


const styles = {
  main: {
    backgroundColor: 'red',
    fontSize: '2rem'
  }
};

export default withStyles(styles)(BlockView);
