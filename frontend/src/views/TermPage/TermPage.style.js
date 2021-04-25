import {withStyles} from '@material-ui/core/styles';

import TermPage from './TermPage'

const styles = {
  mainContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },

  pasInput: {
    width: '100px',
    margin: '0 5px'
  }
}

export default withStyles(styles)(TermPage)