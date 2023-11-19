import React, { FC } from "react";
import { TripType } from "../../types/types";
import { Link } from "react-router-dom";
import { getTripDetailRoutePath } from "../../routes/routePaths";

import styles from "../../styles/tripMenu.module.scss";

type Props = {
  data: TripType;
};

const TripListItem: FC<Props> = ({ data }) => {
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

export { TripListItem };
