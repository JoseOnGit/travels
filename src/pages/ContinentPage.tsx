import React, { FC, useEffect, useMemo, useState } from "react";
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
  const navigate = useNavigate();
  const { continent } = useParams();

  console.log("🚀 ContinentPage ");

  const continentData = useMemo(() => getContinentData(continent), [continent]);

  const continentTrips = useMemo(
    () => getContinentTrips(continentData?.label),
    [continentData]
  );

  const navItemsWithLinks = useMemo(() => getContinentNavItems(), []);

  const [enteringSite, setEnteringSite] = useState(true);
  const [leavingSite, setLeavingSite] = useState(false);

  console.log("%c⧭ enteringSite ", "color: #364cd9", enteringSite);
  console.log("%c⧭ leavingSite ", "color: #364cd9", leavingSite);

  useEffect(() => {
    setEnteringSite(true);
    window.setTimeout(() => {
      setEnteringSite(false);
    }, 700);
  }, [continent]);

  const handleLeavingSite = (to: string) => {
    setLeavingSite(true);

    window.setTimeout(() => {
      navigate(to);
      setLeavingSite(false);
    }, 500);
  };

  return (
    <>
      <HeaderContinent
        continentData={continentData}
        enteringSite={enteringSite}
        leavingSite={leavingSite}
      />
      <div className={styles.contentWrapper}>
        <TripList
          continentTrips={continentTrips}
          enteringSite={enteringSite}
          leavingSite={leavingSite}
        />
      </div>
      <BottomNavWrapper
        navItems={navItemsWithLinks}
        selectedItem={continent}
        leaveSite={handleLeavingSite}
      />
    </>
  );
};

export { ContinentPage };
