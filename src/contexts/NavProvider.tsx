import React, { FC, ReactNode, useState } from "react";
import { NavContextType } from "../types/types";

import styles from "../styles/main.module.scss";

type Props = {
  children: ReactNode;
};

const initialNavState: NavContextType = {
  isOpen: false,
  toggleOpenNav: () => {},
};

const NavContext = React.createContext(initialNavState);

const NavProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenNav = () => {
    if (isOpen) {
      document.documentElement.classList.remove(styles.openMenu);
      setIsOpen(false);
    } else {
      document.documentElement.classList.add(styles.openMenu);
      setIsOpen(true);
    }
  };

  return (
    <NavContext.Provider value={{ isOpen, toggleOpenNav }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavProvider, NavContext };
