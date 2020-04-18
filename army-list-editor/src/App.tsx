import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rules from './pages/Rules';
import { SnackbarProvider } from 'notistack';

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
            <Route path="/rules" exact>
              <Rules />
            </Route>
          </Switch>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
