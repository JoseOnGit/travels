import React, { FC, useEffect, useState } from "react";
import { ContinentType } from "../types/types";
import cx from "classnames";
import { useParams } from "react-router-dom";
import styles from "../styles/header.module.scss";

type Props = {
  continentData: ContinentType;
};

const HeaderContinent: FC<Props> = ({ continentData }) => {
  const { continent } = useParams();

  const [headerClasses, setHeaderClasses] = useState(styles.headerContinent);

  useEffect(() => {
    setHeaderClasses(cx(styles.headerContinent, styles.animate));
    window.setTimeout(() => {
      setHeaderClasses(styles.headerContinent);
    }, 700);
  }, [continent]);

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
