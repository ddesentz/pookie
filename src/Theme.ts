import { createTheme } from '@mui/material/styles';

export const pookieTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: '#7F9FBA',
      main: '#5078A0',
      dark: '#365E7F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#FFDBBB',
      main: '#FABD7C',
      dark: '#D89B64',
      contrastText: '#000000',
    },
    error: {
      light: '#EF9A9A',
      main: '#EF5350',
      dark: '#E53935',
      contrastText: '#FFEBEE',
    },
    background: {
      default: '#1D1E25',
      paper: '#252A31',
    },
  },
  spacing: 4,
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Montserrat'].join(','),
  },
});