import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4e8cff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffd166',
      contrastText: '#212121',
    },
    background: {
      default: '#f4f6fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c2c2c',
      secondary: '#666',
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'Poppins, Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 700,
      color: '#4e8cff',
    },
    h5: {
      fontWeight: 600,
      color: '#ffd166',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
});

export default theme;
