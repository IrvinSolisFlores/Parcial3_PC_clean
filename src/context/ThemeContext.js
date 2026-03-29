import React, { createContext, useState } from 'react';

// Crear el contexto del tema
export const ThemeContext = createContext();

// Proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(previousState => !previousState);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      background: isDarkMode ? '#1E1E1E' : '#F5F5F5',
      text: isDarkMode ? '#FFF' : '#333',
      border: isDarkMode ? '#333' : '#ccc',
      cardBackground: isDarkMode ? '#2A2A2A' : '#FFF',
      tabBar: isDarkMode ? '#1E1E1E' : '#FFF',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
