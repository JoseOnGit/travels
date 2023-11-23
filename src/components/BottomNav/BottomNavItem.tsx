import React, { FC } from "react";
import { Link } from "react-router-dom";
import { NavItemType } from "../../types/types";

import styles from "../../styles/navigation.module.scss";

type Props = {
  item: NavItemType;
};

const BottomNavItem: FC<Props> = ({ item }) => {
  return (
    <div className={styles.bottomNavIconWrapper}>
      <Link to={item.link}>
        <img key={item.id} alt={item.label} src={item.icon} />
      </Link>
    </div>
  );
};

export { BottomNavItem };
