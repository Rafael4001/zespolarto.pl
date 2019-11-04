import { withStyles } from '@material-ui/core/styles';
import BlockViewWithImage from './BlockViewWithImage'


const styles = {
  mainContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '1rem',
    borderBottom: 'solid 0.05rem #6C7279',
  },
  photo: {
    width: '100%',
  },
  photoContainer: {
    padding: '1rem',
  },
  text: {
    fontSize: '1rem',
  },
  cytat: {
    fontSize: '1rem',
    fontFamily: '\'Courgette\', cursive',//TODO font zaladować
  },
};

export default withStyles(styles)(BlockViewWithImage);
