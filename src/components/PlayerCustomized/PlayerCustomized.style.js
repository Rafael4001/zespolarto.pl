import { withStyles } from '@material-ui/core/styles';
import PlayerCustomized from './PlayerCustomized'


const styles = {
  main: {
    backgroundColor: '#f5f5f5',
    width: '80%',

    ul: {
      textDecoration: 'none'
    },

    li: {
      textDecoration: 'none',
    },
  },

  volume: {
    backgroundColor: 'yellow',
    width: 250,
  },
  blabla: {
    backgroundColor: 'red',
    fontSize: '2rem'
  }
};

export default withStyles(styles)(PlayerCustomized);
