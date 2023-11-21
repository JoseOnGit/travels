import { ContinentType, NavItemType } from "../types/types";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export enum Continent {
  EUROPE = "europe",
  ASIA = "asia",
  AMERICA = "america",
  AFRICA = "africa",
}

export const ContinentsData: ContinentType[] = [
  {
    id: 1,
    name: Continent.EUROPE,
    label: "Europe",
    icon: "/img/icon_europe.png",
    globe: "/img/globe_europe.png",
  },
  {
    id: 2,
    name: Continent.ASIA,
    label: "Asia",
    icon: "/img/icon_asia.png",
    globe: "/img/globe_asia.png",
  },
  {
    id: 3,
    name: Continent.AMERICA,
    label: "America",
    icon: "/img/icon_america.png",
    globe: "/img/globe_america.png",
  },
  {
    id: 4,
    name: Continent.AFRICA,
    label: "Africa",
    icon: "/img/icon_africa.png",
    globe: "/img/globe_africa.png",
  },
];

export const MainNavItems: NavItemType[] = [
  {
    id: 1,
    label: "Travels",
    link: "",
    icon: "",
  },
  {
    id: 2,
    label: "About us",
    link: "",
    icon: "",
  },
  {
    id: 3,
    label: "Contact",
    link: "",
    icon: "",
  },
  {
    id: 43,
    label: "Contact",
    link: "",
    icon: "",
  },
  {
    id: 5,
    label: "Contact",
    link: "",
    icon: "",
  },
  {
    id: 6,
    label: "Contact",
    link: "",
    icon: "",
  },
];
