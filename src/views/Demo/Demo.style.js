import { withStyles } from '@material-ui/core/styles';

import Demo from './Demo'


const styles = (theme) => ({
  menuHomepage: {
    position: 'fixed',
    top: '0rem',
    zIndex: 10000,
    backgroundColor: '#FFF',
    width: '100%',
  },
  bodyHomepage: {
    // position: 'absolute',
    // top: '5rem',
    // width: '80rem',
    // zIndex: 10000
  }
});

export default withStyles(styles)(Demo);
