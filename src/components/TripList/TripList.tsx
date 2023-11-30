import React, { FC, useEffect, useState } from "react";
import { TripType } from "../../types/types";
import cx from "classnames";
import { TripListItem } from "./TripListItem";

import styles from "../../styles/tripMenu.module.scss";
import { useParams } from "react-router-dom";

type Props = {
  continentTrips: TripType[];
  leavingSite: boolean;
};

const TripList: FC<Props> = ({ continentTrips, leavingSite }) => {
  const { continent } = useParams();

  const [tripListClasses, setTripListClasses] = useState(
    styles.tripMenuWrapper
  );

  useEffect(() => {
    setTripListClasses(cx(styles.tripMenuWrapper, styles.animate));
    window.setTimeout(() => {
      setTripListClasses(styles.tripMenuWrapper);
    }, 700);
  }, [continent]);

  useEffect(() => {
    if (leavingSite) {
      setTripListClasses(
        cx(styles.tripMenuWrapper, styles.animate, styles.out)
      );
    }
  }, [leavingSite]);

  return (
    <div className={tripListClasses}>
      {continentTrips.map((trip, index) => (
        <TripListItem key={index} data={trip} />
      ))}
    </div>
  );
};

export { TripList };
