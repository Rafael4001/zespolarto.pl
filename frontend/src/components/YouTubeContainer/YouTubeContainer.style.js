import { withStyles } from '@material-ui/core/styles';
import YouTubeContainer from './YouTubeContainer'


const styles = (theme) => ({
  mainContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',

    [theme.breakpoints.up('sm')]: {},
  },
  filmContainer: {},
  textContainer: {},

});

export default withStyles(styles)(YouTubeContainer);
