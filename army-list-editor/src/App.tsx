import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import RulesPage from './pages/RulesPage';
import { SnackbarProvider } from 'notistack';
import AmmoPage from './pages/AmmoPage';
import InfoWarAttackPage from './pages/InfoWarAttackPage';
import InfoWarAttackFormPage from './pages/InfoWarAttackFormPage';
import WeaponsPage from './pages/WeaponsPage';
import WeaponsFormPage from './pages/WeaponFormsPage';
import NotFound from './pages/NotFound';

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
            <Route path="/infowar-attacks" exact>
              <InfoWarAttackPage />
            </Route>
            <Route path="/new/infowar-attacks" exact>
              <InfoWarAttackFormPage />
            </Route>
            <Route path="/edit/infowar-attacks/:infoWarAttackId" exact>
              <InfoWarAttackFormPage />
            </Route>
            <Route path="/weapons" exact>
              <WeaponsPage />
            </Route>
            <Route path="/new/weapons" exact>
              <WeaponsFormPage />
            </Route>
            <Route path="/edit/weapons/:weaponId" exact>
              <WeaponsFormPage />
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
