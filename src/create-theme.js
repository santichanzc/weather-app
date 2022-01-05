import { createTheme } from '@mui/material/styles';
import CircularSpUIv3TBook from './assets/fonts/CircularSpUIv3TBook.ttf';

const ourtheme = createTheme({
  typography: {
    fontFamily: ['"CircularSpUIv3TBook"','Roboto','Arial'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'CircularSpUIv3TBook';
          src: local('CircularSpUIv3TBook'), url(${CircularSpUIv3TBook}) format('truetype');
        }
      `,
    },
  },
  palette: {
    primary: {
      light: '#7fd1ff',
      main: '#42a0f0',
      dark: '#0072bd',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#5fff81',
      main: '#00cb51',
      dark: '#009921',
      constrastText: '#ffffff'
    },
    neutral: {
      light: '#3f3a3a',
      main: '#191414',
      dark: '#000000',
      constrastText: '#ffffff'
    }
  },
});

export default ourtheme




