import React, { FC, useEffect, useState } from "react";
import cx from "classnames";
import { NavItemType } from "../../types/types";
import styles from "../../styles/navigation.module.scss";
import { Link } from "react-router-dom";

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
  const [navItemClasses, setNavItemClasses] = useState(initialClasses);

  useEffect(() => {
    if (isOpen) {
      // when MainNav is open,
      // remove .transitionDelay class (...and add it to MainNav-bground),
      // so when MainNav will close, NavItem-ANIMATION runs before MainNav-bground-ANIMATION.
      window.setTimeout(() => {
        setNavItemClasses(styles.mainNavItem);
      }, 300);
    } else {
      // when MainNav is closed,
      // set initial state.
      window.setTimeout(() => {
        setNavItemClasses(initialClasses);
      }, 300);
    }
  }, [isOpen, initialClasses]);

  return (
    <>
      {item.children ? (
        <>
          <div className={navItemClasses}>
            <div>{item.label}</div>
          </div>
          <div className={styles.subItemBox}>
            {item.children.map((child) => (
              <Link onClick={toggleOpenNav} to={child.link}>
                {child.label}
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className={navItemClasses}>
          <Link onClick={toggleOpenNav} to={item.link}>
            {item.label}
          </Link>
        </div>
      )}
    </>
  );
};

export { MainNavigationItem };
