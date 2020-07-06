import React from 'react';
import ReactDOM from 'react-dom';
import './global/root.css';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { Home } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from './constants';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path={Routes.HOME} component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
