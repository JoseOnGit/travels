import React, { FC, useEffect, useState } from "react";
import { ContinentType } from "../types/types";
import cx from "classnames";
import styles from "../styles/header.module.scss";

type Props = {
  continentData: ContinentType;
  enteringSite: boolean;
  leavingSite: boolean;
};

const HeaderContinent: FC<Props> = ({
  continentData,
  enteringSite,
  leavingSite,
}) => {
  const [headerClasses, setHeaderClasses] = useState(styles.headerContinent);

  useEffect(() => {
    if (enteringSite) {
      setHeaderClasses(cx(styles.headerContinent, styles.animateIn));
      window.setTimeout(() => {
        setHeaderClasses(styles.headerContinent);
      }, 700);
    }
  }, [enteringSite]);

  useEffect(() => {
    if (leavingSite) {
      setHeaderClasses(cx(styles.headerContinent, styles.animateOut));
    }
  }, [leavingSite]);

  return (
    <div className={headerClasses}>
      <div className={styles.globe}>
        <img alt={continentData.label} src={continentData.globe} />
      </div>
      <div className={styles.headline}>{continentData.label}</div>
    </div>
  );
};

export { HeaderContinent };
