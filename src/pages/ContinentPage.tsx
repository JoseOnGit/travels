import React, { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

  const continentData = getContinentData(currentContinent);
  const continentTrips = getContinentTrips(continentData?.label);
  const navItemsWithLinks = getContinentNavItems();

  const [leavingSite, setLeavingSite] = useState(false);
  console.log("🚀 ~ leavingSite:", leavingSite);

  const handleLeavingSite = (to: string) => {
    setLeavingSite(true);
    window.setTimeout(() => {
      navigate(to);
      setLeavingSite(false);
    }, 700);
  };

  return (
    <>
      <HeaderContinent
        continentData={continentData}
        leavingSite={leavingSite}
      />
      <div className={styles.contentWrapper}>
        <TripList continentTrips={continentTrips} />
      </div>
      <BottomNavWrapper
        navItems={navItemsWithLinks}
        selectedItem={currentContinent}
        leaveSite={handleLeavingSite}
      />
    </>
  );
};

export { ContinentPage };
