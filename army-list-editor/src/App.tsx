import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import AmmoPage from './pages/AmmoPage';
import InfoWarAttackPage from './pages/InfoWarAttackPage';
import NotFound from './pages/NotFound';
import RulesPage from './pages/RulesPage';
import WeaponsPage from './pages/WeaponsPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffad42',
      main: '#f57c00',
      dark: '#bb4d00',
      contrastText: '#000000',
    },
    secondary: {
      light: '#6ff9ff',
      main: '#26c6da',
      dark: '#0095a8',
      contrastText: '#000000',
    },
    background: {
      paper: '#121212',
      default: '#090909',
    },
    type: 'dark',
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={2000}
      >
        <Router>
          <NavBar />
          <Switch>
            <Route path="/ammo">
              <AmmoPage />
            </Route>
            <Route path="/rules">
              <RulesPage />
            </Route>
            <Route path="/infowar">
              <InfoWarAttackPage />
            </Route>
            <Route path="/weapons">
              <WeaponsPage />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
