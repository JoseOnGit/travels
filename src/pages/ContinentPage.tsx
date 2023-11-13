import React, { FC } from "react";
import { useParams } from "react-router-dom";
import {
  getContinentData,
  getContinentNavItems,
  getContinentTrips,
} from "../utils/utils";
import { BottomNavWrapper } from "../components/BottomNavWrapper";
import { TripMenuWrapper } from "../components/TripMenuWrapper";
import { HeadlineContinent } from "../components/HeadlineContinent";

import styles from "../styles/main.module.scss";

const ContinentPage: FC = () => {
  const { continent: currentContinent } = useParams();

  const continentData = getContinentData(currentContinent);
  const continentTrips = getContinentTrips(continentData?.label);
  const navItemsWithLinks = getContinentNavItems();

  return (
    <>
      <HeadlineContinent continentData={continentData} />
      <div className={styles.contentWrapper}>
        <TripMenuWrapper continentTrips={continentTrips} />
      </div>
      <BottomNavWrapper navItems={navItemsWithLinks} />
    </>
  );
};

export { ContinentPage };
