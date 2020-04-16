import { withStyles } from '@material-ui/core/styles';

import Demo from './Demo'


const styles = (theme) => ({
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  contactTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '2.3125rem',
    fontFamily: 'Parisienne',
  }
});

export default withStyles(styles)(Demo);
