import { withStyles } from '@material-ui/core/styles';

import Error from './Error'


const styles = {
  errorMain: {
    color: 'red',
    fontSize: '0.625rem'
  }
};

export default withStyles(styles)(Error);
