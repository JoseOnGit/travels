// import { Continent } from "../constants/constants";

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export type NavContextType = {
  isOpen: boolean;
  toggleOpenNav: () => void;
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

export type NavItemType = {
  id: number;
  icon: string;
  label: string;
  link: string;
};
