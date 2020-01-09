import { withStyles } from '@material-ui/core/styles';
import Footer from './Footer'
import { COLORS } from "../../constants";


const styles = (theme) => ({
  footerContainer: {
    backgroundColor: `${COLORS.grey.medium}`,
    padding: '1rem',
  },
  mainContainer: {
    '& a': {
      textDecoration: 'none',
      color: `${COLORS.blue.main}`,
    },
    width: '100%',
    backgroundColor: `${COLORS.grey.medium}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '1rem',
  },
  socialMediaContainer: {
    padding: '1rem',
    backgroundColor: `${COLORS.grey.medium}`
  },

  socialLink: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    '& a': {
      textDecoration: 'none',
      color: `${COLORS.blue.main}`,
    }
  },
  iconFacebook: {
    width: '1.8rem',
    height: '1.8rem',
  },
  logoContainer: {},
  iconArto: {
    width: '2rem',
    height: '2rem',
  },
  rightsContainer: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '0.7rem',
    fontWeight: 100,
  },
  phoneContainer: {
    display: 'grid',
    gridGap: '1rem 0',
    gridTemplateColumns: '3.2rem 2rem 1fr',
  },
  phoneText: {
    fontSize: '1rem',
  },
  marginBottomContainer: {
    marginBottom: '1rem',
  },
  iconMessageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  iconMessage: {
    fontSize: '8px',
    '& a': {
      textDecoration: 'none',
      color: `${COLORS.blue.main}`,
    }
  },
});

export default withStyles(styles)(Footer);
