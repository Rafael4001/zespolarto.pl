import { withStyles } from '@material-ui/core/styles';

import MenuItem from './MenuItem'
import { COLORS } from "../../constants";


const styles = (theme) => ({
  mainContainer: {
    height: '3rem',
    border: 'none',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    padding: '0 2rem',
    margin: '0.2rem 0.2rem',
    borderBottom: `solid 1px ${COLORS.grey.light}`,

    '&:hover': {
      transition: 'paddingTop 0.3s',
      color: COLORS.red.main,
      borderBottom: `solid 1px ${COLORS.red.main}`
    },

  },
  text: {
    fontSize: '1.3rem',
    fontWeight: 500,
  }
});

export default withStyles(styles)(MenuItem);
