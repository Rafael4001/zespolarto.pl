import { withStyles } from '@material-ui/core/styles';
import FilmPhotoChoice from './Film-PhotoChoice'
import { COLORS } from "../../constants";


const radiusCorner = '1.5rem';

const styles = (theme) => ({
  mediaHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 0 0 0',
    flexDirection: 'column',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  textHeader: {
    fontSize: '2.5rem',
    fontWeight: 300,
    fontFamily: 'Parisienne',
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    gridGap: '1rem',

    [theme.breakpoints.up('sm')]: {},
  },
  mediaBookmark: {
    display: 'flex',
    padding: '1rem 0',
    justifyContent: 'center',
    flexDirection: 'column',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  positionRelative: {
    position: 'relative',
    height: '30rem',
  },
  positionAbsolute: {
    position: 'absolute',
    transition: 'all .3s ease',
    top: 0,
    filter: 'opacity(1)',

    '&:hover': {
      top: `-0.3rem`,
      filter: 'opacity(0.7)',
    },
  },
  mediaCard: {
    width: '18rem',
    height: '25rem',
    border: `solid ${COLORS.grey.dark} 1px`,
    borderRadius: `${radiusCorner} ${radiusCorner} 0 0`,
    fontSize: '2rem',
    textAlign: 'center',
    margin: '2rem 0',
    fontFamily: 'Parisienne',

    '&:hover': {
      backgroundColor: `${COLORS.grey.light}`
    },

    [theme.breakpoints.up('sm')]: {
      width: '22rem',
      height: '25rem',
      margin: '2rem',
    },

  },
  photoCard: {
    width: '100%',
    borderRadius: `${radiusCorner} ${radiusCorner} 0 0`,
  },
  textContainer: {
    padding: '0.5rem',
  },
  text: {
    fontSize: '1.2rem',
    fontWeight: 300,
    fontFamily: '\'Baskervville\',serif',
  },


  quotationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  quotation: {
    fontSize: '1.8rem',
    fontFamily: 'Parisienne',
  },
  author: {
    fontSize: '1rem',
    fontFamily: 'Parisienne',
  },
  leaf_icon: {
    width: '2.3rem',
    margin: '1rem 0 0 1rem ',

    [theme.breakpoints.up('md')]: {
      margin: '0 0 0 1rem ',
    },

  },
});

export default withStyles(styles)(FilmPhotoChoice);
