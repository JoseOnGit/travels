import React, { FC, useEffect, useState } from "react";
import cx from "classnames";
import { MainNavItems } from "../../constants/constants";
import { MainNavigationItem } from "./MainNavigationItem";
import styles from "../../styles/navigation.module.scss";
import { NavContext } from "../../contexts/NavProvider";

type Props = {};

const MainNavigation: FC<Props> = () => {
  const { isOpen, toggleOpenNav } = React.useContext(NavContext);

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
    <div className={elementClasses}>
      {MainNavItems.map((item) => (
        <MainNavigationItem
          key={item.id}
          item={item}
          isOpen={isOpen}
          toggleOpenNav={toggleOpenNav}
        />
      ))}
    </div>
  );
};

export { MainNavigation };
