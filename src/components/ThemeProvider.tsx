import React, { FC, ReactNode, useEffect, useState } from "react";
import { Theme } from "../constants/constants";
import { ThemeType } from "../types/types";
import styles from "../styles/main.module.scss";

type Props = {
  children: ReactNode;
};

const initialTheme: ThemeType = {
  theme: Theme.LIGHT,
  toggleTheme: () => {},
};

// Theme Content - 'light' as default

const ThemeContext = React.createContext(initialTheme);

// Theme Provider

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  // check Local Storage and set theme if it's stored

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === Theme.DARK;
    setTheme(isDark ? Theme.DARK : Theme.LIGHT);
  }, [theme]);

  // toggle theme,
  // save it in Locale Storage,
  // set attribute 'data-theme' for <html> tag
  // add class 'colorThemeInTransition' and remove it afrewards - makes smooth transition of background color

  const toggleTheme = () => {
    const isDark = theme === Theme.DARK;
    const themeToSwitchTo = isDark ? Theme.LIGHT : Theme.DARK;

    document.documentElement.classList.add(styles.colorThemeInTransition);
    document.documentElement.setAttribute("data-theme", theme);

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
