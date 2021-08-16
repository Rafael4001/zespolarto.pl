import {withStyles} from '@material-ui/core/styles';

import Opinions from './Opinions'


const styles = (theme) => ({
  detailsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    padding: '2rem 1rem',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column'
    },
  },
  allOpinionTales: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '0.5rem',
    padding: '1rem',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(5, 1fr)',
    },

  },
  textContainer: {
    padding: '0 1rem 1rem 1rem ',
    fontFamily: '\'Baskervville\',serif',
  },
  author: {
    fontSize: '0.8125rem',
    fontFamily: 'Parisienne',
  },
  weddingDate: {
    textAlign: 'right'
  },
  imageContainer: {},
  loveLetterIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  warningMessage: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: '1rem',
    color: 'red'
  }

});

export default withStyles(styles)(Opinions);
