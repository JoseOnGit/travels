import { ContinentsData } from "../constants/constants";
import { tripsMenuItemsData } from "../data/tripsMenuItems";
import { getTravelByLocationRoutePath } from "../routes/routePaths";
import { ContinentType, TripType } from "../types/types";

export const getContinentData = (continentName: string | undefined) => {
  // prettier-ignore
  console.log('%c⧭ getContinentData: continentName ', 'color: #ffa280', continentName);

  return (
    ContinentsData.find((continent) => continent.name === continentName) ||
    ([] as unknown as ContinentType)
  );
};

export const getContinentTrips = (
  continentName: string | undefined
): TripType[] => {
  // prettier-ignore
  console.log('%c⧭ getContinentTrips: continentName ', 'color: #ffa280', continentName);

  return tripsMenuItemsData.filter(
    (trip) => trip.continent.toLowerCase() === continentName?.toLowerCase()
  );
};

export const getContinentNavItems = () =>
  ContinentsData.map((menuItem, index) => ({
    id: index,
    icon: menuItem.icon,
    name: menuItem.name,
    label: menuItem.label,
    link: getTravelByLocationRoutePath(menuItem.name),
  }));
