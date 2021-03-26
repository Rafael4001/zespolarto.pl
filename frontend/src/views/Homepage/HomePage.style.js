import { withStyles } from '@material-ui/core/styles';

import HomePage from './HomePage'
import {COLORS} from "../../colors";

const styles = (theme) => ({
    loadingContainer: {
      width: "100%",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },

    loadingText: {
      marginTop: '1rem',
      color: `${COLORS.grey.dark}`
    }

  }
);

export default withStyles(styles)(HomePage);
