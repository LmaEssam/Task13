import React, { createContext, useState, useContext,useEffect } from 'react';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };
    useEffect(() => {
        document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
           {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
