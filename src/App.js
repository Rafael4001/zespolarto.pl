import React, { Component, Fragment } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme'

import Mainpage from './view/Mainpage'


class App extends Component {
  render() {
    return (
      <Fragment>
        <MuiThemeProvider theme={theme}>
          <Mainpage/>
        </MuiThemeProvider>
      </Fragment>
    )
  }
}

export default App;
