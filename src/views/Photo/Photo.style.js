import { withStyles } from '@material-ui/core/styles';

import Photo from './Photo'


const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  webRightContent: {
    position: 'absolute',
    left: '22rem',
    top: 0
  },
  menuHomepage: {
    position: 'fixed',
    top: '0rem',
  }
};

export default withStyles(styles)(Photo);
