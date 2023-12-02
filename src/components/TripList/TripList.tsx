import React, { FC, useEffect, useState } from "react";
import { TripType } from "../../types/types";
import cx from "classnames";
import { TripListItem } from "./TripListItem";
import styles from "../../styles/tripMenu.module.scss";
import { NavContext } from "../../contexts/NavProvider";
import { toggleClasses } from "../../utils/utils";

type Props = {
  continentTrips: TripType[];
};

const TripList: FC<Props> = ({ continentTrips }) => {
  const { pageLoading, pageLeaving } = React.useContext(NavContext);

  const [tripListClasses, setTripListClasses] = useState(
    styles.tripMenuWrapper
  );

  // useEffect(() => {
  //   toggleClasses(
  //     styles.tripMenuWrapper,
  //     styles.animate,
  //     pageLoading,
  //     setTripListClasses
  //   );
  //   // if (pageLoading) {
  //   //   setTripListClasses(cx(styles.tripMenuWrapper, styles.animate));
  //   //   window.setTimeout(() => {
  //   //     setTripListClasses(styles.tripMenuWrapper);
  //   //   }, 700);
  //   // }
  // }, [pageLoading]);

  // useEffect(() => {
  //   toggleClasses(
  //     styles.tripMenuWrapper,
  //     cx(styles.animate, styles.out),
  //     pageLeaving,
  //     setTripListClasses
  //   );
  //   // if (pageLeaving) {
  //   //   setTripListClasses(
  //   //     cx(styles.tripMenuWrapper, styles.animate, styles.out)
  //   //   );
  //   // }
  // }, [pageLeaving]);

  return (
    <div className={tripListClasses}>
      {continentTrips.map((trip, index) => (
        <TripListItem key={index} data={trip} />
      ))}
    </div>
  );
};

export { TripList };
