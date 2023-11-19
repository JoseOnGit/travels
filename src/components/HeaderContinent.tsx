import React, { FC } from "react";
import { ContinentType } from "../types/types";

import styles from "../styles/header.module.scss";

type Props = {
  continentData: ContinentType;
};

const HeaderContinent: FC<Props> = ({ continentData }) => {
  return (
    <div className={styles.headerContinent}>
      <div className={styles.globe}>
        <img alt={continentData.label} src={continentData.globe} />
      </div>
      <div className={styles.headline}>{continentData.label}</div>
    </div>
  );
};

export { HeaderContinent };
