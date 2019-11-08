import { withStyles } from '@material-ui/core/styles';

import MenuItem from './MenuItem'


const styles = {
  mainContainer: {
    height: '4rem',
    width: '20rem',
    backgroundColor: '#c11616',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 1rem',

    margin: '0.2rem 0',
    borderRadius:'',

  },
  text:{
    fontSize: '1.7rem',
    color: '#FFF',
  }


};

export default withStyles(styles)(MenuItem);
