import React, { FC } from "react";
import { NavItemType } from "../../types/types";
import cx from "classnames";
import styles from "../../styles/navigation.module.scss";
import { NavContext } from "../../contexts/NavProvider";
import { useNavigate } from "react-router-dom";

type Props = {
  item: NavItemType;
  selected: boolean;
};

const BottomNavItem: FC<Props> = ({ item, selected }) => {
  const { setLeavingPage } = React.useContext(NavContext);
  const navigate = useNavigate();

  const bottomNavIconClasses = selected
    ? cx(styles.bottomNavIconWrapper, styles.selected)
    : styles.bottomNavIconWrapper;

  return (
    <div className={bottomNavIconClasses}>
      <div onClick={() => setLeavingPage(navigate, item.link)}>
        <img key={item.id} alt={item.label} src={item.icon} />
      </div>
    </div>
  );
};

export { BottomNavItem };
