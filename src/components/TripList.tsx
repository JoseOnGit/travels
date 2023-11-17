import React, { FC } from "react";
import { TripType } from "../types/types";
import { TripListItem } from "./TripListItem";

import styles from "../styles/tripMenu.module.scss";

type Props = {
  continentTrips: TripType[];
};

const TripList: FC<Props> = ({ continentTrips }) => {
  return (
    <div className={styles.tripMenuWrapper}>
      {continentTrips.map((trip, index) => (
        <TripListItem key={index} data={trip} />
      ))}
    </div>
  );
};

export { TripList };
