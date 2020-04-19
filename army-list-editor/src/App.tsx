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

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#baffff',
      main: '#84ffff',
      dark: '#4bcbcc',
      contrastText: '#000000',
    },
    secondary: {
      light: '#fbfffc',
      main: '#c8e6c9',
      dark: '##97b498',
      contrastText: '#000000',
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
            <Route path="/ammo" exact>
              <AmmoPage />
            </Route>
            <Route path="/rules" exact>
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
          </Switch>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
