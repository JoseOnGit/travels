import React, { FC } from "react";
import { useParams } from "react-router-dom";
import {
  getContinentData,
  getContinentNavItems,
  getContinentTrips,
} from "../utils/utils";
import { BottomNavWrapper } from "../components/BottomNav/BottomNavWrapper";
import { TripList } from "../components/TripList/TripList";
import { HeaderContinent } from "../components/HeaderContinent";

import styles from "../styles/main.module.scss";

const ContinentPage: FC = () => {
  const { continent: currentContinent } = useParams();

  const continentData = getContinentData(currentContinent);
  const continentTrips = getContinentTrips(continentData?.label);
  const navItemsWithLinks = getContinentNavItems();

  return (
    <>
      <HeaderContinent continentData={continentData} />
      <div className={styles.contentWrapper}>
        <TripList continentTrips={continentTrips} />
      </div>
      <BottomNavWrapper
        navItems={navItemsWithLinks}
        selectedItem={currentContinent}
      />
    </>
  );
};

export { ContinentPage };
