import React, { FC } from "react";
import styles from "../styles/header.module.scss";
import { Link } from "react-router-dom";
import { getHomeRoutePath } from "../routes/routePaths";
import { ReactComponent as Navicon } from "../libs/navicon.svg";
import { ReactComponent as Close } from "../libs/close.svg";
import { NavContext } from "../contexts/NavProvider";

type Props = {};

const PageHeader: FC<Props> = () => {
  const { isOpen, toggleOpenNav } = React.useContext(NavContext);

  return (
    <div className={styles.pageHeader}>
      <div className={styles.logo}>
        <Link
          onClick={() => (isOpen ? toggleOpenNav() : {})}
          to={getHomeRoutePath()}
        >
          MIRKA & JOZEF
        </Link>
      </div>
      <div onClick={() => toggleOpenNav()}>
        {isOpen ? (
          <Close className={styles.navIcon} />
        ) : (
          <Navicon className={styles.navIcon} />
        )}
      </div>
    </div>
  );
};

export { PageHeader };
