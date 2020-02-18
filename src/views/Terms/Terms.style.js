import { withStyles } from '@material-ui/core/styles';

import Terms from './Terms'


const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  tabContainer: {
    paddingTop: '2rem',
  },
});

export default withStyles(styles)(Terms);
