import { withStyles } from '@material-ui/core/styles';

import HomePage from './HomePage'


const styles = {
  mainContainer: {
    // display: 'grid',
    // gridTemplateColumns: '3.5fr 1fr',

    display: 'flex',
    flexDirection: 'row',

    // backgroundColor: '#97c1aa',
    alignItems: 'center',

  },

};

export default withStyles(styles)(HomePage);
