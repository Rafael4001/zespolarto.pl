import { withStyles } from '@material-ui/core/styles';

import HomePage from './HomePage'

import { COLORS, MAX_PAGE_WIDTH } from "../../constants";


const styles = (theme) => ({
  menuHomepage: {
    position: 'fixed',
    top: '0rem',
    zIndex: 10000,
    backgroundColor: '#FFF',
    borderBottom: `solid 1px ${COLORS.grey.medium}`,
    width: '100%',
    maxWidth: MAX_PAGE_WIDTH,
  },
  bodyHomepage: {
    display: 'flex',
    flexDirection: 'column',
    top: '5rem',
    maxWidth: '80rem',
  }
});

export default withStyles(styles)(HomePage);
