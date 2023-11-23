import React, { FC, useEffect, useState } from "react";
import cx from "classnames";
import { MainNavItems } from "../../constants/constants";
import { MainNavigationItem } from "./MainNavigationItem";
import { NavContext } from "../../contexts/NavProvider";
import styles from "../../styles/navigation.module.scss";
import { ThemeContext } from "../../contexts/ThemeProvider";

type Props = {};

const MainNavigation: FC<Props> = () => {
  const { toggleTheme } = React.useContext(ThemeContext);
  const { isOpen, toggleOpenNav } = React.useContext(NavContext);

  // play with classes, so we achive animation like
  // first open navigation by smoothly resize background from 0 to 100 width and height,
  // then show menu items with fade in and drop effect
  // then smoothly expand possible submenus

  const [elementClasses, setElementClasses] = useState(styles.mainNav);

  useEffect(() => {
    if (isOpen) {
      // when MainNav is open,
      // add class .open
      setElementClasses(cx(styles.mainNav, styles.open));
    } else {
      // when MainNav is closed,
      // remove class .open and add class .transitionDelay,
      // so NavItem-ANIMATION runs before MainNav-bground-ANIMATION,
      // then remove also .transitionDelay
      // so we get initial state.
      setElementClasses(cx(styles.mainNav, styles.transitionDelay));
      window.setTimeout(() => {
        setElementClasses(styles.mainNav);
      }, 300);
    }
  }, [isOpen]);

  return (
    <div id="mainNav" className={elementClasses}>
      {MainNavItems.map((item) => (
        <MainNavigationItem
          key={item.id}
          item={item}
          isOpen={isOpen}
          toggleOpenNav={toggleOpenNav}
        />
      ))}
      <div className={styles.mainNavBottomBox}>
        <div onClick={toggleTheme}>Theme</div>
      </div>
    </div>
  );
};

export { MainNavigation };
