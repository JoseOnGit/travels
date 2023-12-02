import React, { FC, useContext, useEffect, useState } from "react";
import { ContinentType } from "../types/types";
import { NavContext } from "../contexts/NavProvider";
import styles from "../styles/header.module.scss";
import cx from "classnames";

type Props = {
  continentData: ContinentType;
};

const HeaderContinent: FC<Props> = ({ continentData }) => {
  console.log("🚀 ~ HeaderContinent:");
  const { pageLoading, pageLeaving } = useContext(NavContext);
  console.log("🚀 ~ pageLoading:", pageLoading);
  console.log("🚀 ~ pageLeaving:", pageLeaving);

  const [headerClasses, setHeaderClasses] = useState(
    cx(styles.headerContinent, styles.animateIn)
  );
  console.log("🚀 ~ headerClasses:", headerClasses);

  useEffect(() => {
    if (pageLoading) {
      setHeaderClasses(cx(styles.headerContinent, styles.animateIn));
    } else {
      if (pageLeaving) {
        setHeaderClasses(cx(styles.headerContinent, styles.animateOut));
      } else {
        setHeaderClasses(styles.headerContinent);
      }
    }
  }, [pageLoading, pageLeaving]);

  // useEffect(() => {
  //   toggleClasses(
  //     styles.headerContinent,
  //     styles.animateIn,
  //     pageLoading,
  //     setHeaderClasses,
  //     700
  //   );
  // }, [pageLoading]);

  // useEffect(() => {
  //   toggleClasses(
  //     styles.headerContinent,
  //     styles.animateOut,
  //     pageLeaving,
  //     setHeaderClasses,
  //     700
  //   );
  // }, [pageLeaving]);

  return (
    <div className={headerClasses}>
      {/* <div className={styles.globe}>
        <img alt={continentData.label} src={continentData.globe} />
      </div> */}

      <div
        className={styles.continentOnGlobe}
        style={{ backgroundImage: `url(${continentData.globe})` }}
      />
      <div className={styles.headline}>{continentData.label}</div>
    </div>
  );
};

export { HeaderContinent };
