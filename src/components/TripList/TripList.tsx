import React, { FC, useState } from "react";
import { TripType } from "../../types/types";
import { TripListItem } from "./TripListItem";
import styles from "../../styles/tripMenu.module.scss";

type Props = {
  continentTrips: TripType[];
};

const TripList: FC<Props> = ({ continentTrips }) => {
  // const { pageLoading, pageLeaving } = React.useContext(NavContext);

  const [tripListClasses] = useState(styles.tripMenuWrapper);

  return (
    <div className={tripListClasses}>
      {continentTrips.map((trip, index) => (
        <TripListItem key={index} data={trip} />
      ))}
    </div>
  );
};

export { TripList };
