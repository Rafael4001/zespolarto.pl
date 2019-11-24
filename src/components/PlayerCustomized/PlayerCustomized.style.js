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
  volumeContainer: {
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  volume: {
    width: 50,
  },
  volumeText: {
    marginRight: '1rem',
  },
  playerToolsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 2fr',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: ,
    fontSize: '1.2rem'
  },
  playerTime: {
    display: 'flex',
    flexDirection: 'row',
    // gridTemplateColumns: '1fr 1fr 1fr',
  }
};

export default withStyles(styles)(PlayerCustomized);
