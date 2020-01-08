import { withStyles } from '@material-ui/core/styles';

import MenuComponent from './MenuComponent'


const styles = {
  mainContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuContainer:{
    display: 'flex',
    margin: '0 2rem 0 0'
  },

  photoContainer: {
    display: 'flex',
    padding: '0.2rem 2rem',
    justifyContent: 'center',
    '&:hover': {
      transition: '0.3s',
      transform: 'scale(1.04)'
    },
  },
  photo: {
    width: '6rem',
  }
};

export default withStyles(styles)(MenuComponent);
