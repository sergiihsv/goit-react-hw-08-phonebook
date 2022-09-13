import { createTheme } from '@mui/material/styles';

export let theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(161 240 226)',
      light: 'rgb(161 240 226)',
      dark: '#7700ff',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

export const light = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(161 240 226)',
    },
    secondary: {
      main: '#000',
    },
    background: {
      main: '#fff',
    },
  },
};

export const dark = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#7700ff',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      main: '#757575',
    },
  },
};
