import React, { FC } from "react";
import { Link } from "react-router-dom";
import { NavItemType } from "../../types/types";
import cx from "classnames";
import styles from "../../styles/navigation.module.scss";

type Props = {
  item: NavItemType;
  selected: boolean;
  leaveSite: (to: string) => void;
};

const BottomNavItem: FC<Props> = ({ item, selected, leaveSite }) => {
  const bottomNavIconClasses = selected
    ? cx(styles.bottomNavIconWrapper, styles.selected)
    : styles.bottomNavIconWrapper;

  return (
    <div className={bottomNavIconClasses}>
      <div onClick={() => leaveSite(item.link)}>
        <img key={item.id} alt={item.label} src={item.icon} />
      </div>
    </div>
  );
};

export { BottomNavItem };
