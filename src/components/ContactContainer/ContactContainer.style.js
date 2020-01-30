import { withStyles } from '@material-ui/core/styles';
import ContactContainer from './ContactContainer'
import { COLORS, MARGIN_TOP_UNDER_MENU, SCREEN_SIZE } from "../../constants";


const styles = (theme) => ({
  mainContainer: {
    '& a': {
      textDecoration: 'none',
      color: `#000`,
    },

    display: 'flex',
    flexDirection: 'column',
    marginTop: MARGIN_TOP_UNDER_MENU,


    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },

    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: '1fr 1fr',
    },

  },
  subContainer: {
    display: 'grid',
    gridGap: '1rem 0.5rem',
    gridTemplateColumns: '3.5rem 1.5rem 1fr',
    margin: '0.6rem 1rem'
  },
  PhoneIcon: {
    color: '#000',
  },
  textContactPage: {
    fontSize: '1.2rem',
    fontWeight: 300,
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

    '&:focus': {
      outline: 'none',
    },
  },
  photoContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    }
  },

  photo: {
    width: '80%',
    padding: '0.5rem',
    border: `solid 1px ${COLORS.grey.dark}`,


    [theme.breakpoints.up('sm')]: {
      padding: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '90%',
    }
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',

    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
    }
  },
  photoLoversContainer: {
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    }
  },
  photoLovers: {
    width: '10rem',
    padding: '1rem',
  },
  emailIconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  FacebookMainContainer: {
    margin: '2rem 0',
    display: 'flex',
    flexDirection: "column",
    backgroundColor: `${COLORS.grey.grey_1}`
  },
  FacebookContainer: {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
  },
  facebookIcon: {
    marginTop: '1rem',
    fontSize: '4rem',
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
    // maxWidth: '30rem',
  },
  photoMapContainer: {
    padding: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    fontFamily: '\'Baskervville\',serif',
  },
  tileContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  titleLublinMap: {
    textAlign: 'end',
    fontSize: '1.5rem',
    fontFamily: '\'Baskervville\',serif',



    [theme.breakpoints.up('sm')]: {
      fontSize: '2.2rem',
    },

  },



});

export default withStyles(styles)(ContactContainer);
