import React, { useState, useMemo } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import HomePage from './composant/HomePage';
import SecondPage from './composant/SecondPage';
import './composant/AppBar.css';
import Contact from './composant/Contact';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static" className="AppBar">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
              Portfolio
            </Typography>
            <Grid container spacing={2} xs={6} md={7}>
              <Grid item>
                <Button color="inherit" component={Link} to="/">Home</Button>
              </Grid>
              <Grid item>
                <Button color="inherit" component={Link} to="/second-page">Projet</Button>
              </Grid>
              <Grid item>
                <Button color="inherit" component={Link} to="/contact-page">Contact</Button>
              </Grid>
            </Grid>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="toggle dark mode"
              onClick={handleToggleDarkMode}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/second-page" element={<SecondPage />} />
            <Route path="/contact-page" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
