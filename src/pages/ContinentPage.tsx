import React, { FC, useEffect, useMemo } from "react";
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
import { NavContext } from "../contexts/NavProvider";

const ContinentPage: FC = () => {
  const { continent } = useParams();

  const { pageLoading, pageLeaving, setLoadingPage } =
    React.useContext(NavContext);

  const navItemsWithLinks = useMemo(() => getContinentNavItems(), []);
  const continentData = useMemo(() => getContinentData(continent), [continent]);
  const continentTrips = useMemo(
    () => getContinentTrips(continentData?.label),
    [continentData]
  );

  // fire setLoadingPage() to run 'onPageLoad animations' when URL 'continent' parameter change
  useEffect(() => {
    // prettier-ignore
    if (!pageLoading && !pageLeaving) {
      setLoadingPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [continent]);

  return (
    <>
      <HeaderContinent continentData={continentData} />
      <div className={styles.contentWrapper}>
        <TripList continentTrips={continentTrips} />
      </div>
      <BottomNavWrapper navItems={navItemsWithLinks} selectedItem={continent} />
    </>
  );
};

export { ContinentPage };
