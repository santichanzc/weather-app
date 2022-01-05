import * as React from 'react';
import WeatherPage from './pages/weather-page.jsx';
import  ourtheme   from './create-theme.js';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';



function App() {
  return (
    
     <ThemeProvider theme={ourtheme}>
       <CssBaseline/>
       <WeatherPage></WeatherPage>
       </ThemeProvider>
  );
}

export default App
