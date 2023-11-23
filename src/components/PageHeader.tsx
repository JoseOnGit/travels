import React, { FC } from "react";
import { Link } from "react-router-dom";
import { getHomeRoutePath } from "../routes/routePaths";
import { ReactComponent as Navicon } from "../libs/navicon.svg";
import { ReactComponent as Close } from "../libs/close.svg";
import { NavContext } from "../contexts/NavProvider";
import styles from "../styles/header.module.scss";

type Props = {};

const PageHeader: FC<Props> = () => {
  const { isOpen, toggleOpenNav } = React.useContext(NavContext);

  // hide logo when MainNav scrolls
  const mainNavElement = document.querySelector("#mainNav");

  mainNavElement?.addEventListener("scroll", function () {
    const logoElement = document.querySelector("#logo");
    const currentScrollPos = mainNavElement.scrollTop;

    if (currentScrollPos > 20) {
      // user has scrolled up
      logoElement?.classList.add(styles.hidden);
    } else {
      // user has scrolled down
      logoElement?.classList.remove(styles.hidden);
    }
  });

  return (
    <div className={styles.pageHeader}>
      <div id="logo" className={styles.logo}>
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
