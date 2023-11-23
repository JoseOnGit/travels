import React, { FC } from "react";
import cx from "classnames";
import { NavItemType } from "../../types/types";
import { BottomNavItem } from "./BottomNavItem";
import styles from "../../styles/navigation.module.scss";
import "../../styles/main.module.scss";
import { NavContext } from "../../contexts/NavProvider";

type Props = {
  navItems: NavItemType[];
};

const BottomNavWrapper: FC<Props> = ({ navItems }) => {
  const { isOpen } = React.useContext(NavContext);

  const classes = isOpen
    ? cx(styles.bottomNavWrapper, styles.hidden)
    : styles.bottomNavWrapper;

  return (
    <div className={classes}>
      {navItems.map((navItem) => (
        <BottomNavItem item={navItem} key={navItem.id} />
      ))}
    </div>
  );
};

export { BottomNavWrapper };
