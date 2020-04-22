import { withStyles } from '@material-ui/core/styles';

import AddTermForm from './AddTermForm'


const styles = {
  errorText: {
    color: 'red',
    border: 'solid 1px red',
  }
};

export default withStyles(styles)(AddTermForm);
