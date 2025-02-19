import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#7986cb',
    },
    secondary: {
      main: '#4db6ac',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    allVariants: {
      color: '#ffffff',
    },
  },
});

export default theme;