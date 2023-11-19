import React, { FC } from "react";
import styles from "../styles/header.module.scss";
import { Link } from "react-router-dom";
import { getHomeRoutePath } from "../routes/routePaths";
import { ReactComponent as Navicon } from "../libs/navicon.svg";
import { ReactComponent as Close } from "../libs/close.svg";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
};

const PageHeader: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.logo}>
        <Link onClick={() => setIsOpen(false)} to={getHomeRoutePath()}>
          MIRKA & JOZEF
        </Link>
      </div>
      <div onClick={() => setIsOpen(!isOpen)}>
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
