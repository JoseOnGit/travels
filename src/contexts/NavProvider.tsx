import React, { FC, ReactNode, useEffect, useState } from "react";
import { NavContextType } from "../types/types";

import styles from "../styles/main.module.scss";
import { NavigateFunction } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const initialNavState: NavContextType = {
  pageLoading: true,
  pageLeaving: false,
  isOpen: false,
  toggleOpenNav: () => {},
  setLoadingPage: () => {},
  setLeavingPage: () => {},
};

const NavContext = React.createContext(initialNavState);

const NavProvider: FC<Props> = ({ children }) => {
  const [pageLoading, setPageLoading] = useState(false);
  const [pageLeaving, setPageLeaving] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // automaticaly turn OFF pageLoading after 0.7s
  useEffect(() => {
    if (pageLoading) {
      window.setTimeout(() => {
        setPageLoading(false);
      }, 700);
    }
  }, [pageLoading]);

  // turn ON pageLoading
  const setLoadingPage = () => {
    setPageLoading(true);

    // window.setTimeout(() => {
    //   setPageLoading(false);
    // }, 700);
  };

  // turn ON pageLeaving and redirect to...
  const setLeavingPage = (navigate: NavigateFunction, to: string) => {
    setPageLeaving(true);

    window.setTimeout(() => {
      navigate(to);
      setPageLeaving(false);
    }, 700);
  };

  // TOGGLE Main Navigation's 'open/close' state
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
    <NavContext.Provider
      value={{
        pageLoading,
        pageLeaving,
        isOpen,
        toggleOpenNav,
        setLoadingPage,
        setLeavingPage,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export { NavProvider, NavContext };
