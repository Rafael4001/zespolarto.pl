import { withStyles } from '@material-ui/core/styles';
import PageWrapper from './PageWrapper';

const styles = (theme) => ({
  pageWrapperOuter: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: theme.palette.common.white,
  },
  pageWrapperInner: {
    maxWidth: '100rem',
    width: '100%',
    margin: '0 auto',
  },
});

export default withStyles(styles)(PageWrapper);
