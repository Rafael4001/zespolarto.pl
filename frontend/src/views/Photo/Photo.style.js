import { withStyles } from '@material-ui/core/styles';

import Photo from './Photo'


const styles = {
  menuHomepage: {
    position: 'fixed',
    top: '0rem',
    zIndex: 10000,
    backgroundColor: '#FFF',
    width: '100%',
  },
};

export default withStyles(styles)(Photo);
