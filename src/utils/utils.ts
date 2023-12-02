import { ContinentsData } from "../constants/constants";
import { tripsMenuItemsData } from "../data/tripsMenuItems";
import { getTravelByLocationRoutePath } from "../routes/routePaths";
import { ContinentType, TripType } from "../types/types";
import cx from "classnames";

export const getContinentData = (continentName: string | undefined) => {
  return (
    ContinentsData.find((continent) => continent.name === continentName) ||
    ([] as unknown as ContinentType)
  );
};

export const getContinentTrips = (
  continentName: string | undefined
): TripType[] => {
  return tripsMenuItemsData.filter(
    (trip) => trip.continent.toLowerCase() === continentName?.toLowerCase()
  );
};

export const getContinentNavItems = () => {
  return ContinentsData.map((menuItem, index) => ({
    id: index,
    icon: menuItem.icon,
    name: menuItem.name,
    label: menuItem.label,
    link: getTravelByLocationRoutePath(menuItem.name),
  }));
};

export const toggleClasses = (
  defaultClass: string,
  toggleClass: string,
  condition: boolean,
  stateAction: React.Dispatch<React.SetStateAction<string>>,
  delay?: number
) => {
  if (condition) {
    console.log("%c⧭ defaultClass ", "color: #d2957f", defaultClass);
    console.log("%c⧭ toggleClass ", "color: #d2957f", toggleClass);
    console.log("%c⧭ condition ", "color: #d2957f", condition);
    stateAction(cx(defaultClass, toggleClass));
    // window.setTimeout(() => {
    //   console.log("%c⧭ now DELAY runs..................... ", "color: #d2957f");
    //   stateAction(defaultClass);
    // }, delay || 700);
  } else {
    stateAction(defaultClass);
  }
};
