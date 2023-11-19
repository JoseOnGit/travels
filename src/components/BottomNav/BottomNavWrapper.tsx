import React, { FC } from "react";
import { BottomNavItemType } from "../../types/types";
import { BottomNavItem } from "./BottomNavItem";

import styles from "../../styles/navigation.module.scss";

type Props = {
  navItems: BottomNavItemType[];
};

const BottomNavWrapper: FC<Props> = ({ navItems }) => {
  return (
    <div className={styles.bottomNavWrapper}>
      {navItems.map((navItem) => (
        <BottomNavItem item={navItem} key={navItem.id} />
      ))}
    </div>
  );
};

export { BottomNavWrapper };
