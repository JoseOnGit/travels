import React, { FC, useState } from "react";
import cx from "classnames";
import { useNavigate } from "react-router-dom";
import { NavItemType } from "../../types/types";

import styles from "../../styles/navigation.module.scss";

type Props = {
  item: NavItemType;
};

const BottomNavItem: FC<Props> = ({ item }) => {
  const navigate = useNavigate();

  const [elementClasses, setElementClasses] = useState<string>();

  const redirectToContitnent = () => {
    localStorage.setItem("menuContinent", item.label);

    setElementClasses(cx(styles.clicked, styles[item.label]));

    window.setTimeout(() => {
      setElementClasses("");
      navigate(item.link);
    }, 400);
  };

  return (
    <div
      className={styles.bottomNavIconWrapper}
      onClick={() => redirectToContitnent()}
    >
      {/* <Link onClick={() => redirectToContitnent()} to={item.link}> */}
      <img
        className={elementClasses}
        key={item.id}
        alt={item.label}
        src={item.icon}
      />
      {/* </Link> */}
    </div>
  );
};

export { BottomNavItem };
