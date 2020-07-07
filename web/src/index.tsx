import { ThemeProvider } from '@material-ui/core';
import { Routes } from '@web/constants';
import '@web/global/root.css';
import { Home } from '@web/pages';
import theme from '@web/theme';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
