import React, { FC } from "react";
import { TripType } from "../types/types";

import styles from "../styles/tripMenu.module.scss";
import { Link } from "react-router-dom";
import { getTripDetailRoutePath } from "../routes/routePaths";

type Props = {
  data: TripType;
};

const TripMenuItem: FC<Props> = ({ data }) => {
  return (
    <div className={styles.tripMenuItem}>
      <Link to={getTripDetailRoutePath(data.name)}>
        <div className={styles.headline}>{data.country}</div>
        <div>{data.date}</div>
        <div>{data.description}</div>
      </Link>
    </div>
  );
};

export { TripMenuItem };
