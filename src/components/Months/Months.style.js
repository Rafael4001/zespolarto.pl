import { withStyles } from '@material-ui/core/styles';

import Months from './Months'


const styles = ({
  monthName: {
    fontSize: '2rem',
    backgroundColor: '#c6c6c6',
  },
  monthContainer: {
    margin: 0,
    textDecoration: 'none',
    padding: 0,
  },
  dayContainer: {
    marginTop: '1rem',
    listStyle:'none',
  },
  icon: {
    margin: '0 1rem',
  },
});

export default withStyles(styles)(Months);












