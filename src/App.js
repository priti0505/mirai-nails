import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './Services';

export default function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </ThemeProvider>
  );
}

