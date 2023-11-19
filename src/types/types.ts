// import { Continent } from "../constants/constants";

export type ThemeType = {
  theme: string;
  toggleTheme: () => void;
};

export type TripType = {
  id: number;
  continent: string;
  country: string;
  name: string;
  description: string;
  date: string;
};

export type ContinentType = {
  id: number;
  name: string;
  label: string;
  icon: string;
  globe: string;
};

export type BottomNavItemType = {
  id: number;
  icon: string;
  label: string;
  link: string;
};
