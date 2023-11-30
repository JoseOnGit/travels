import React, { FC } from "react";
import { Link } from "react-router-dom";
import { NavItemType } from "../../types/types";
import cx from "classnames";
import styles from "../../styles/navigation.module.scss";

type Props = {
  item: NavItemType;
  selected: boolean;
};

const BottomNavItem: FC<Props> = ({ item, selected }) => {
  const bottomNavIconClasses = selected
    ? cx(styles.bottomNavIconWrapper, styles.selected)
    : styles.bottomNavIconWrapper;

  return (
    <div className={bottomNavIconClasses}>
      <Link to={item.link}>
        <img key={item.id} alt={item.label} src={item.icon} />
      </Link>
    </div>
  );
};

export { BottomNavItem };
