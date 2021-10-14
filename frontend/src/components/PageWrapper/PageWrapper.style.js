import { withStyles } from '@material-ui/core/styles'
import PageWrapper from './PageWrapper'
import { MAX_PAGE_WIDTH, MENU_MOBILE_HEIGHT } from '../../constants'
import { COLORS } from '../../colors'

const styles = (theme) => ({
  pageWrapperOuter: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.white,
    paddingTop: MENU_MOBILE_HEIGHT,
    maxWidth: MAX_PAGE_WIDTH,
    margin: '0 auto',

    [theme.breakpoints.up('md')]: {
      paddingTop: '6rem'
    }
  },
  menuHomepage: {
    position: 'fixed',
    top: '0rem',
    zIndex: 10000,
    width: '100%',
    maxWidth: MAX_PAGE_WIDTH,
    borderBottom: `solid 1px ${COLORS.grey.light}`,

    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#FFF'
    }
  }
})

export default withStyles(styles)(PageWrapper)
