import { withStyles } from '@material-ui/core/styles';

import MenuComponent from './MenuComponent'


const styles = {
  mainContainer: {

  },

  photoContainer: {
    display: 'flex',
    padding: '1rem',
    width: '100%',
    justifyContent: 'center',
  },
  photo: {
    width: '10rem',

  }
};

export default withStyles(styles)(MenuComponent);
