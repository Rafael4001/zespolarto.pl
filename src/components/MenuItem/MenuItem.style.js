import { withStyles } from '@material-ui/core/styles';

import MenuItem from './MenuItem'

import { MENU_ITEM_WIDTH } from '../../constants'


const styles = {
  mainContainer: {
    height: '4rem',
    width: `${MENU_ITEM_WIDTH}rem`,
    backgroundColor: '#c11616',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 1rem',
    border: 'none',
    margin: '0.2rem 0',
    borderRadius: '',
    // boxShadow: '0.01rem 0.01rem 0.1rem #C6C6C6',

    '&:hover': {
      transition: '0.3s',
      backgroundColor: '#b41616',
      paddingRight: '0.9rem',

      // boxShadow: '5px 10px #888888',
    },

  },
  text: {
    fontSize: '1.7rem',
    color: '#FFF',
    fontWeight: 400,
  }


};

export default withStyles(styles)(MenuItem);
