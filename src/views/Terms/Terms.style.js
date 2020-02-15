import { withStyles } from '@material-ui/core/styles';

import Terms from './Terms'


const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabContainer: {
  },
});

export default withStyles(styles)(Terms);
