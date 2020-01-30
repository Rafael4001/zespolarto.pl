import { withStyles } from '@material-ui/core/styles';
import FilmPhotoChoice from './Film-PhotoChoice'
import { COLORS } from "../../constants";


const styles = (theme) => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    gridGap: '1rem',

    [theme.breakpoints.up('sm')]: {},
  },
  mediaBookmark: {
    display: 'flex',
    padding: '2rem 0',
    justifyContent: 'center',

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
    width: '22rem',
    height: '25rem',
    border: `solid ${COLORS.grey.dark} 1px`,
    borderRadius: '1.2rem',
    fontSize: '2rem',
    textAlign: 'center',
    margin: '2rem',
    fontFamily: 'Parisienne',

    '&:hover': {
      backgroundColor: `${COLORS.grey.light}`
    },
  },
  photoCard: {
    width: '100%',
    borderRadius: '1.2rem 1.2rem 0 0',
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

});

export default withStyles(styles)(FilmPhotoChoice);
