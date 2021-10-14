import { withStyles } from '@material-ui/core/styles'
import OpinionTale from './OpinionTaleMini'
import { RADIUS_CORNER } from '../../constants'
import { COLORS } from '../../colors'

const styles = () => ({
  mediaCardTaleMini: {
    cursor: 'pointer',
    border: `solid ${COLORS.grey.dark} 1px`,
    borderRadius: `0 ${RADIUS_CORNER} 0  ${RADIUS_CORNER}`,
    textAlign: 'center',
    overflow: 'hidden',
    boxShadow: '0 6px 16px 0 rgb(0 0 0 / 20%)',
    width: '100%',
    height: '100%',
    transition: '0.1s',

    '&:hover': {
      backgroundColor: `${COLORS.grey.light}`,
      transition: '0.2s'
    }
  },

  quotationContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '2px'
  },
  names: {
    margin: 'auto',
    fontFamily: 'Parisienne',
    fontSize: '1.4rem',
    padding: '0 4px'
  },
  weedingDateText: {
    fontSize: '0.8125rem',
    fontFamily: 'Parisienne'
  },
  leafIcon: {
    margin: 'auto',
    width: '21px',
    paddingTop: '4px'
  }
})

export default withStyles(styles)(OpinionTale)
