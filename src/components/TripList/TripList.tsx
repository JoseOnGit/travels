import React, { FC, useEffect, useState } from "react";
import { TripType } from "../../types/types";
import cx from "classnames";
import { TripListItem } from "./TripListItem";
import styles from "../../styles/tripMenu.module.scss";

type Props = {
  continentTrips: TripType[];
  enteringSite: boolean;
  leavingSite: boolean;
};

const TripList: FC<Props> = ({ continentTrips, enteringSite, leavingSite }) => {
  const [tripListClasses, setTripListClasses] = useState(
    styles.tripMenuWrapper
  );

  useEffect(() => {
    if (enteringSite) {
      setTripListClasses(cx(styles.tripMenuWrapper, styles.animate));
      window.setTimeout(() => {
        setTripListClasses(styles.tripMenuWrapper);
      }, 700);
    }
  }, [enteringSite]);

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
