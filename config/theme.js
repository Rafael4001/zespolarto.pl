import { createMuiTheme } from '@material-ui/core/styles';

// import indigo from '@material-ui/core/colors/indigo';

//TODO: change this theme after receive mockups
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#2342D3',
      main: '#425EE2',
      dark: '#4A30E2',
    },
  }
  //   secondary: {
  //     light: indigo[300],
  //     main: indigo[500],
  //     dark: indigo[700],
  //   },
  //   custom: {
  //     grey: {
  //       light: '#F2F2F2',
  //       medium: '#F5F5F5',
  //       dark: '#CFCFCF',
  //     },
  //   }
  // },
  // overrides: {
  //   MuiInputLabel: {
  //     root: {
  //       color: '#425EE2',
  //     },
  //   },
  //   MuiFormHelperText: {
  //     root: {
  //       marginTop: 2,
  //     },
  //   },
  // },
  // typography: {
  //   fontFamily:'Poppins',
  //   root: {
  //     display: 'block',
  //   },
  //   // global typography customization
  //   // https://material-ui.com/customization/themes/#typography
  // },
});

export default theme;
