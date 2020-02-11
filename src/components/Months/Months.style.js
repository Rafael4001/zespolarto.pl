import { withStyles } from '@material-ui/core/styles';

import Months from './Months'


const styles = ({

  // '&:li': {
  //   textDecoration: 'none',
  monthName: {
    fontSize: '2rem',
    backgroundColor: '#c6c6c6'
  },
  monthContainer: {
    margin: 0,
    textDecoration: 'none',
    padding: 0,
    backgroundColor: '#69a53e'
  },
  dayContainer: {
    margin: 0,
    textDecoration: 'none',
  },
  icon: {
    margin: '0 1rem',
  },
});

export default withStyles(styles)(Months);












