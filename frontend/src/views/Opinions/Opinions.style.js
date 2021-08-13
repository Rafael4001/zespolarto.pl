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
    display: 'flex',
    flexWrap: 'wrap'
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
  imageContainer: {
    // boxShadow: '0 6px 16px 0 rgb(0 0 0 / 20%)',
  }
});

export default withStyles(styles)(Opinions);
