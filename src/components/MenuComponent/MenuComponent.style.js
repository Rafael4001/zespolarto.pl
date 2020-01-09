import { withStyles } from '@material-ui/core/styles';

import MenuComponent from './MenuComponent'
import { COLORS } from "../../constants";


const styles = {
  mainContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    // boxShadow: `0 0 0.3rem 0.01rem ${COLORS.grey.dark}`,
    boxShadow: `0 3px 6px -6px #000`,
    margin: '0 0 0.1rem 0'
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
