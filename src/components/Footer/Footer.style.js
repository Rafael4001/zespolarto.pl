import { withStyles } from '@material-ui/core/styles';
import Footer from './Footer'
import { COLORS, SCREEN_SIZE } from "../../constants";


const styles = (theme) => ({

  footerContainer: {
    backgroundColor: `${COLORS.red.medium}`,
    padding: '1rem 1rem 0.2rem 1rem ',

    [theme.breakpoints.up('md')]: {
      padding: '0.4rem',
    },
  },
  mainContainer: {
    '& a': {
      textDecoration: 'none',
      color: `#FFF`,
    },

    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '1rem',

    [theme.breakpoints.down(SCREEN_SIZE.POINT_750)]: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: '1rem',
      justifyItems: 'center',
    },
  },
  socialMediaContainer: {
    padding: '0 1rem',
  },
  facebookIcon: {
    fontSize: '3rem',
  },

  socialLink: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    '& a': {
      textDecoration: 'none',
      color: `${COLORS.blue.main}`,
    },
  },
  contactTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactContainer: {
    // fontFamily: 'Poppins',
    display: 'flex',
    alignItems: 'center',
  },
  iconFacebook: {
    width: '1.8rem',
    height: '1.8rem',
  },
  info_icon: {
    width: '1.8rem',
    marginRight: '0.3rem',
  },
  logoContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  iconArto: {
    width: '5rem',
    borderRadius: '100%',

  },
  rightsContainer: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 100,
    color: '#FFF',
    textDecoration: 'none',
  },
  phoneContainer: {
    display: 'grid',
    gridGap: '1rem 0',
    gridTemplateColumns: '3.5rem 2rem 1fr',
  },
  phoneText: {
    fontSize: '1.1rem',
    color: '#FFF',
    letterSpacing: '0.05rem',
  },
  PhoneIcon: {
    color: '#FFF',
  },
  marginBottomContainer: {
    marginBottom: '0.4rem',
  },
  iconMessageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  iconMessage: {
    padding: 0,
    fontSize: '6px',
    color: `#FFF`,

    '& a': {
      textDecoration: 'none',
      color: `#FFF`,
    }
  },
});

export default withStyles(styles)(Footer);
