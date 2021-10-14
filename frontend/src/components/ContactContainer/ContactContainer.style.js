import { withStyles } from '@material-ui/core/styles'
import ContactContainer from './ContactContainer'
import { SCREEN_SIZE } from '../../constants'

const styles = (theme) => ({
  mainContainer: {
    '& a': {
      textDecoration: 'none',
      color: '#000'
    },
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      marginBottom: '1rem'
    }
  },
  subContainer: {
    display: 'grid',
    gridGap: '0.300rem 0',
    margin: '0.375rem 0',
    gridTemplateColumns: '2rem 4rem 1fr',
    fontFamily: '\'Baskervville\',serif',
    alignItems: 'center',

    '&:focus': {
      outline: 'none'
    },

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1.5rem 2.5rem 5rem',
      margin: '0.125rem 0',
      fontSize: '0.7rem'
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '2rem 4rem 1fr',
      fontSize: '1.2rem'
    }

  },
  PhoneIcon: {
    color: '#000'
  },
  textContactContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
      alignItems: 'normal'
    }
  },
  textContactPage: {
    fontFamily: '\'Baskervville\',serif',
    fontSize: '1rem',

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.7rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem'
    }
  },
  textContactPageBold: {
    fontWeight: 'bold',
    fontFamily: '\'Baskervville\',serif',

    '&:focus': {
      outline: 'none'
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.7rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem'
    }
  },
  textSizeClass: {
    fontSize: '1.2rem',

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.7rem'
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem'
    }
  },
  detailsTextContent: {
    fontWeight: 300,
    fontFamily: 'Poppins',
    alignItems: 'center',
    display: 'flex',

    '&:focus': {
      outline: 'none'
    }
  },
  photoContainer: {
    width: '100%'
  },
  contactTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '2.3125rem',
    fontFamily: 'Parisienne',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem'
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '2.3125rem'
    }
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem',
    justifyContent: 'flex-end',

    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
      alignItems: 'normal',
      padding: '0 0 0 2rem'
    }
  },
  emailIconContainer: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem'
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem'
    }
  },
  facebookIconContainer: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
      marginRight: '0.5rem'
    }
  },
  FacebookMainContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderTop: 'solid 1px #E0E0E0',
    borderBottom: 'solid 1px #E0E0E0',
    margin: '1rem 0 0 0',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      padding: '0.0125rem',
      borderBottom: 'none',
      marginTop: '0.625rem'
    }

  },

  facebookIcon: {
    fontSize: '3rem',

    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem'
    }
  },
  lublinMapContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    padding: '1rem',

    [theme.breakpoints.up(SCREEN_SIZE.POINT_750)]: {
      gridTemplateColumns: '1fr 1fr'
    }
  },
  mainContainerMap: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    marginBottom: '0.25rem',
    paddingTop: '1rem',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr'
    }
  },
  mapContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  photoMap: {
    width: '100%',
    maxWidth: '20rem',

    [theme.breakpoints.up('sm')]: {
      maxWidth: 'none'
    }
  },
  mapDetailsTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textMapDescription: {
    fontFamily: '\'Baskervville\',serif',
    padding: '1rem 2rem'
  },

  titleLublinMap: {
    textAlign: 'center',
    fontSize: '1.875rem',
    fontWeight: 'bold',
    fontFamily: 'Parisienne',
    padding: '1rem 0.125rem',

    [theme.breakpoints.up('sm')]: {
      fontSize: '2.1rem'
    }
  }
})

export default withStyles(styles)(ContactContainer)
