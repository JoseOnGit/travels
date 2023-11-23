// Inspirations:
// https://vimalselvam.com/post/toggle-theme-using-react-hooks/
// https://medium.com/@harishv6665_49536/theming-with-react-js-or-any-in-minutes-with-css-variables-11d4ebecdb41

import React, { FC, ReactNode, useEffect, useState } from "react";
import { Theme } from "../constants/constants";
import { ThemeContextType } from "../types/types";

import styles from "../styles/main.module.scss";

type Props = {
  children: ReactNode;
};

const initialTheme: ThemeContextType = {
  theme: Theme.LIGHT,
  toggleTheme: () => {},
};

// Theme Content - 'light' as default

const ThemeContext = React.createContext(initialTheme);

// Theme Provider

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  // check Local Storage and set theme if it's stored
  // and set attribute 'data-theme' for <html> tag

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === Theme.DARK;
    const themeToSwitchTo = isDark ? Theme.DARK : Theme.LIGHT;

    document.documentElement.setAttribute("data-theme", themeToSwitchTo);
    setTheme(themeToSwitchTo);
  }, [theme]);

  // toggle theme,
  // save it in Locale Storage,
  // add class 'colorThemeInTransition' and remove it afrewards - makes smooth transition of colors

  const toggleTheme = () => {
    const isDark = theme === Theme.DARK;
    const themeToSwitchTo = isDark ? Theme.LIGHT : Theme.DARK;

    document.documentElement.classList.add(styles.colorThemeInTransition);
    localStorage.setItem("theme", themeToSwitchTo);
    setTheme(themeToSwitchTo);

    window.setTimeout(() => {
      document.documentElement.classList.remove(styles.colorThemeInTransition);
    }, 1000);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
