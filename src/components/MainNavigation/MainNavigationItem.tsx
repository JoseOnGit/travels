import React, { FC, useEffect, useState } from "react";
import cx from "classnames";
import { NavItemType } from "../../types/types";
import styles from "../../styles/navigation.module.scss";

type Props = {
  item: NavItemType;
  isOpen: boolean;
  toggleOpenNav: () => void;
};

const MainNavigationItem: FC<Props> = ({ item, isOpen, toggleOpenNav }) => {
  // ELEMENT CLASSES
  const initialClasses = cx(styles.mainNavItem, styles.transitionDelay);

  // add class .transitionDelay by default
  // so when MainNav will open, NavItem-ANIMATION runs after MainNav-bground-ANIMATION
  const [elementClasses, setElementClasses] = useState(initialClasses);

  useEffect(() => {
    if (isOpen) {
      // when MainNav is open,
      // remove .transitionDelay class (...and add it to MainNav-bground),
      // so when MainNav will close, NavItem-ANIMATION runs before MainNav-bground-ANIMATION.
      window.setTimeout(() => {
        setElementClasses(styles.mainNavItem);
      }, 300);
    } else {
      // when MainNav is closed,
      // set initial state.
      window.setTimeout(() => {
        setElementClasses(initialClasses);
      }, 300);
    }
  }, [isOpen, initialClasses]);

  return <div className={elementClasses}>{item.label}</div>;
};

export { MainNavigationItem };
