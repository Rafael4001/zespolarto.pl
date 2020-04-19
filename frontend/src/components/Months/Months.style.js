import { withStyles } from '@material-ui/core/styles';

import Months from './Months'


const styles = ({
  monthNameContainer: {
    display: 'flex',
    alignItems: 'baseline',
    backgroundColor: '#c6c6c6',
  },
  monthName: {
    fontSize: '2rem',
  },
  monthNumber: {
    fontSize: '2rem',
    marginLeft: '1rem',
    color: "#FFF",
  },
  monthContainer: {
    margin: '1rem 0',
    textDecoration: 'none',
    padding: 0,
  },
  weddingsAmount: {
    fontSize: '1rem',
    color: '#56595c',
    marginLeft: '0.5rem',
  },
  dayContainer: {
    marginTop: '1rem',
    listStyle: 'none',
  },
  icon: {
    margin: '0 1rem',
  },
});

export default withStyles(styles)(Months);












