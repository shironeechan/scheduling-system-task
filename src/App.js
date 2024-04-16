import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { SignUp } from './pages/SignUp';
import { PrivateRoutes } from './router/PrivateRoutes';
import { ErrorPage } from './pages/ErrorPage';
import TableWithCRUD from './components/TableWithCrud';


//here ga create anay ako hin const context para matawag ha iba na jsx file ngan mamanage ko an context...
export const ThemeContext = createContext();

const App = () => {
  // gin initialize ko anay an darkmode ngan gigamitan setter para tawgon niyan as function para han toggle toggle san button...
  const [darkMode, setDarkMode] = useState(false);

  // create kog function na toggletheme para itoggle niyan fro light to dark vice versa...
  const toggleTheme = () => {
    // create kog function na toggletheme para itoggle niyan fro light to dark vice versa...
    setDarkMode(prevMode => !prevMode);
  };

  return (
    // here is giwrap ko na an themecontext ha provider tas gintawag ko an darkmode na initializer for toggling, ngan an toggle theme...
    // so once ga pindot adto na toggle button, nattrigger an light mode na default value han darkmode and toggletheme na magiging dark mode na...
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
          <Route element={<TableWithCRUD />} path="/" exact/>
          <Route element={<Home />} path="/home"/>
          <Route element={<About />} path="/about"/>
          </Route>
          <Route element={<SignUp />} path="/signup"/>
          <Route element={<ErrorPage />} path="*" />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
};
  
export default App;