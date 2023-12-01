import React, { FC, useEffect, useState } from "react";
import { ContinentType } from "../types/types";
import { NavContext } from "../contexts/NavProvider";
import { toggleClasses } from "../utils/utils";
import styles from "../styles/header.module.scss";

type Props = {
  continentData: ContinentType;
};

const HeaderContinent: FC<Props> = ({ continentData }) => {
  const { pageLoading, pageLeaving } = React.useContext(NavContext);
  console.log("%c⧭ pageLoading ", "color: #8c0038", pageLoading);
  console.log("%c⧭ pageLeaving ", "color: #8c0038", pageLeaving);

  const [headerClasses, setHeaderClasses] = useState(styles.headerContinent);
  console.log("%c⧭ headerClasses ", "color: #514080", headerClasses);

  useEffect(() => {
    toggleClasses(
      styles.headerContinent,
      styles.animateIn,
      pageLoading,
      setHeaderClasses,
      700
    );
  }, [pageLoading]);

  useEffect(() => {
    toggleClasses(
      styles.headerContinent,
      styles.animateOut,
      pageLeaving,
      setHeaderClasses,
      700
    );
  }, [pageLeaving]);

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
