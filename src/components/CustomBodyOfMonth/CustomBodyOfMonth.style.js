import { withStyles } from '@material-ui/core/styles';

import CustomBodyOfMonth from './CustomBodyOfMonth';


const styles = (theme) => ({
  main: {
    fontSize: '1.2rem',
    padding: '0.35rem',
    border: 'solid #ddd 0.001rem',
  },

  number: {
    color: '#aeaeae',
    paddingRight: '0.5rem',
    fontSize: '1.5rem',
  },

  day: {
    paddingLeft: '0.5rem'
  },

  busy: {
    backgroundColor: '#dff0d8',
    color: '#3c763d',
  },

  emptyContainer: {
    background: 'none',
  },

  holiday: {
    backgroundColor: '#5bc0de',
    color: 'white',
  },


  infoEmpty: {
    fontSize: '1rem',

    borderRadius: '0.5rem',
    padding: '0.2rem 0.4rem',
    float: 'right',
    marginRight: '1rem',
    backgroundColor: '#ff747e',
  },

  infoBusy: {
    fontSize: '1rem',

    borderRadius: '0.5rem',
    padding: '0.2rem 0.4rem',
    float: 'right',
    marginRight: '1rem',

    backgroundColor: '#55c7bd',
    color: 'black',
  },

  infoHoliday: {
    fontSize: '1rem',

    borderRadius: '0.5rem',
    padding: '0.2rem 0.4rem',
    float: 'right',
    marginRight: '1rem',

    backgroundColor: 'white',
    color: 'black',
  },

  details: {
    fontSize: '0.75rem',
    margin: '0.2rem',
  },

  rowContainer: {
    display: 'grid',
    gridTemplateColumns: '5fr 1fr',
  },
});

export default withStyles(styles)(CustomBodyOfMonth);
