import { withStyles } from '@material-ui/core/styles'

import OpinionTale from './OpinionTale'
import { RADIUS_CORNER } from '../../constants'
import { COLORS } from '../../colors'

const styles = () => ({
  mediaCard: {
    cursor: 'pointer',
    border: `solid ${COLORS.grey.dark} 1px`,
    borderRadius: `0 ${RADIUS_CORNER} 0  ${RADIUS_CORNER}`,
    fontSize: '2rem',
    textAlign: 'center',
    margin: '15px',
    marginBottom: '1.5rem',
    fontFamily: 'Parisienne',
    boxShadow: '0 6px 16px 0 rgb(0 0 0 / 20%)',

    minWidth: '15rem',
    maxWidth: '18rem',

    '&:hover': {
      backgroundColor: `${COLORS.grey.light}`
    }

  },
  photoCard: {
    width: '100%',
    borderRadius: `0 ${RADIUS_CORNER} 0 0`
  },
  textContainer: {
    padding: '0.5rem'
  },
  leaf_icon: {
    width: '1.5rem'
  },
  quotationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  names: {
    margin: 'auto',
    fontFamily: 'Parisienne',
    fontSize: '1.8rem'
  },
  quotation: {
    fontSize: '1.2rem',
    fontFamily: 'Parisienne',
    margin: '0.5rem auto'
  },
  more: {
    fontSize: '1.2rem',
    fontFamily: 'Parisienne',
    margin: 'auto',
    textTransform: 'initial',
    fontWeight: 600
  },
  author: {
    fontSize: '0.8125rem',
    fontFamily: 'Parisienne'
  }
})

export default withStyles(styles)(OpinionTale)
