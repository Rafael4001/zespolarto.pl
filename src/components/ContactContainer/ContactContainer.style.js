import { withStyles } from '@material-ui/core/styles';

import ContactContainer from './ContactContainer'

import { MARGIN_TOP_UNDER_MENU, SCREEN_SIZE } from "../../constants";
import { COLORS } from '../../colors'

const styles = (theme) => ({
  mainContainer: {
    '& a': {
      textDecoration: 'none',
      color: `#000`,
    },
    display: 'flex',
    flexDirection: 'column',


    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
  },
  subContainer: {
    display: 'grid',
    gridGap: '0.300rem 0',
    gridTemplateColumns: '2rem 4rem 1fr',
    margin: '0.375rem'
  },
  PhoneIcon: {
    color: '#000',
  },
  contactDetailsContainer: {},
  textContactPage: {
    fontFamily: '\'Baskervville\',serif',

    '&:focus': {
      outline: 'none',
    },
  },
  textContactPageBold: {
    fontWeight: 'bold',
    fontFamily: '\'Baskervville\',serif',

    '&:focus': {
      outline: 'none',
    },
  },
  titleTextContactPage: {
    fontSize: '2.2rem',
    fontFamily: 'Parisienne',
    display: 'flex',
  },
  phoneNumberText: {
    fontSize: '1.2rem',
    fontWeight: 300,
    fontFamily: "Poppins",
    alignItems: 'center',

    '&:focus': {
      outline: 'none',
    },
  },
  photoContainer: {
    width: '100%',
  },
  contactContainer: {
    display: 'flex',
    padding: '1rem 0',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  contactTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '2.3125rem',
    fontFamily: 'Parisienne',
  },
  photo: {
    width: '100%',
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem',

    [theme.breakpoints.up('sm')]: {
      alignItems: 'normal',
      padding: '0 0 0 3rem',
    },
  },
  photoLoversContainer: {
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    }
  },
  photoLovers: {
    height: '12rem',
  },
  emailIconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  FacebookMainContainer: {
    display: 'flex',
    flexDirection: "column",
    backgroundColor: `${COLORS.grey.grey_1}`,
    width: '100%',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderTop: 'solid 1px #E0E0E0',

    [theme.breakpoints.up('sm')]: {
      margin: '1rem 0',
      flexDirection: "row-reverse",
      justifyContent: 'center',
    }

  },

  facebookIcon: {
    marginTop: '1rem',
    fontSize: '3rem',
  },
  facebookPageIcon: {
    width: '6rem',
  },
  facebookFaceIconContainer: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    alignItems: 'center',

    // justifyContent: '3fr 1fr',
  },
  lublinMapContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    padding: '1rem',

    [theme.breakpoints.up(SCREEN_SIZE.POINT_750)]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  lublinMap: {
    width: '100%',
    padding: '1rem',
  },

//  --------------------------
  mainContainerMap: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    padding: '1rem',

    [theme.breakpoints.up(SCREEN_SIZE.POINT_750)]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  photoMap: {
    width: '100%',
  },
  mapDetailsTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontFamily: '\'Baskervville\',serif',
    padding: '1rem 2rem',
  },

  titleLublinMap: {
    textAlign: 'center',
    fontSize: '1.875rem',
    fontWeight: 'bold',
    fontFamily: 'Parisienne',
    marginBottom: '1rem',

    [theme.breakpoints.up('sm')]: {
      fontSize: '2.2rem',
    },
  },
});

export default withStyles(styles)(ContactContainer);
