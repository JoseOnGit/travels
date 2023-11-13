import React, { FC } from "react";
import { TripType } from "../types/types";
import { TripMenuItem } from "./TripMenuItem";

import styles from "../styles/tripMenu.module.scss";

type Props = {
  continentTrips: TripType[];
};

const TripMenuWrapper: FC<Props> = ({ continentTrips }) => {
  return (
    <div className={styles.tripMenuWrapper}>
      {continentTrips.map((trip, index) => (
        <TripMenuItem key={index} data={trip} />
      ))}
    </div>
  );
};

export { TripMenuWrapper };
