import React, { FC } from "react";
import cx from "classnames";
import { NavItemType } from "../../types/types";
import { BottomNavItem } from "./BottomNavItem";
import { NavContext } from "../../contexts/NavProvider";
import styles from "../../styles/navigation.module.scss";

type Props = {
  navItems: NavItemType[];
  selectedItem: string | undefined;
  leaveSite: (to: string) => void;
};

const BottomNavWrapper: FC<Props> = ({ navItems, selectedItem, leaveSite }) => {
  const { isOpen } = React.useContext(NavContext);

  const bottomNavWrapperClasses = isOpen
    ? cx(styles.bottomNavWrapper, styles.hidden)
    : styles.bottomNavWrapper;

  return (
    <div className={bottomNavWrapperClasses}>
      {navItems.map((navItem) => {
        return (
          <BottomNavItem
            item={navItem}
            key={navItem.id}
            selected={navItem.name === selectedItem}
            leaveSite={leaveSite}
          />
        );
      })}
    </div>
  );
};

export { BottomNavWrapper };
