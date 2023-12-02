import {
  getContactRoutePath,
  getTravelByLocationRoutePath,
} from "../routes/routePaths";
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
    icon: "/img/icons/icon_europe_150.png",
    globe: "/img/globes/globe_europe_600.avif",
  },
  {
    id: 2,
    name: Continent.ASIA,
    label: "Asia",
    icon: "/img/icons/icon_asia_150.png",
    globe: "/img/globes/globe_asia_600.avif",
  },
  {
    id: 3,
    name: Continent.AMERICA,
    label: "America",
    icon: "/img/icons/icon_america_150.png",
    globe: "/img/globes/globe_america_600.avif",
  },
  {
    id: 4,
    name: Continent.AFRICA,
    label: "Africa",
    icon: "/img/icons/icon_africa_150.png",
    globe: "/img/globes/globe_africa_600.avif",
  },
];

export const MainNavItems: NavItemType[] = [
  {
    id: 1,
    label: "Travels",
    link: "",
    icon: "",
    children: [
      {
        id: 1.1,
        label: "by locations",
        link: getTravelByLocationRoutePath(Continent.EUROPE),
        icon: "",
      },
      {
        id: 1.2,
        label: "by time",
        link: getTravelByLocationRoutePath(Continent.EUROPE),
        icon: "",
      },
    ],
  },
  {
    id: 2,
    label: "About us",
    link: getContactRoutePath(),
    icon: "",
  },
  {
    id: 3,
    label: "Contact",
    link: getContactRoutePath(),
    icon: "",
  },
  // {
  //   id: 4,
  //   label: "Next Item 1",
  //   link: getContactRoutePath(),
  //   icon: "",
  // },
  // {
  //   id: 5,
  //   label: "Next Item 2",
  //   link: getContactRoutePath(),
  //   icon: "",
  // },
  // {
  //   id: 6,
  //   label: "Next Item 3",
  //   link: getContactRoutePath(),
  //   icon: "",
  // },
  // {
  //   id: 7,
  //   label: "Next Item 4",
  //   link: getContactRoutePath(),
  //   icon: "",
  // },
];
