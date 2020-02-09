import { withStyles } from '@material-ui/core/styles';

import Months from './Months'


const styles = ({

  // '&:li': {
  //   textDecoration: 'none',
  monthName: {
    color: 'red',
    fontSize: '2rem',
  },
  monthContainer: {
    margin: 0,
    textDecoration: 'none',
    padding: 0,
  },
  dayContainer: {
    margin: 0,
    textDecoration: 'none',
  },
});

export default withStyles(styles)(Months);












