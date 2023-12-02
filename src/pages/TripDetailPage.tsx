import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { tripsMenuItemsData } from "../data/tripsMenuItems";
import styles from "../styles/header.module.scss";

type Props = {};

const TripDetailPage: FC<Props> = () => {
  const { trip: currentTrip } = useParams();

  const tripData = tripsMenuItemsData.find((trip) => trip.name === currentTrip);

  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.headline}>{tripData?.country}</div>
        </div>
      </div>
    </>
  );
};

export { TripDetailPage };
