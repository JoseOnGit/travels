// import { Continent } from "../constants/constants";

import { NavigateFunction } from "react-router-dom";

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export type NavContextType = {
  pageLoading: boolean;
  pageLeaving: boolean;
  isOpen: boolean;
  toggleOpenNav: () => void;
  setLoadingPage: () => void;
  setLeavingPage: (navigate: NavigateFunction, to: string) => void;
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
  name?: string;
  label: string;
  link: string;
  children?: NavItemType[];
};
