import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MLogin from './components/MLogin';
import MHome from './components/MHome';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MLogin />} />
          <Route path="/home/*" element={<MHome />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
