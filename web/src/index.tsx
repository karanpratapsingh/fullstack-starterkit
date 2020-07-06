import React from 'react';
import ReactDOM from 'react-dom';
import './global/root.css';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { Home } from './pages';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
