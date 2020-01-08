import { withStyles } from '@material-ui/core/styles';
import PageWrapper from './PageWrapper';
import { COLORS, MAX_PAGE_WIDTH } from "../../constants";

const styles = (theme) => ({
  pageWrapperOuter: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '6rem',
  },
  pageWrapperInner: {
    width: '100%',
    maxWidth: '80rem',
    margin: '0 auto',
  },
  menuHomepage: {
    position: 'fixed',
    top: '0rem',
    zIndex: 10000,
    backgroundColor: '#FFF',
    borderBottom: `solid 1px ${COLORS.grey.medium}`,
    width: '100%',
    maxWidth: MAX_PAGE_WIDTH,
  },
});

export default withStyles(styles)(PageWrapper);
