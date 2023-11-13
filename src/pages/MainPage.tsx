import React, { FC } from "react";
import { Link } from "react-router-dom";
import { getTravelByLocationRoutePath } from "../routes/routePaths";
import { Continent } from "../constants/constants";

type Props = {};

const MainPage: FC<Props> = () => {
  return (
    <div>
      <div>MainPage</div>
      <Link to={getTravelByLocationRoutePath(Continent.EUROPE)}>Europe</Link>
      <Link to={getTravelByLocationRoutePath(Continent.ASIA)}>Asia</Link>
      <Link to={getTravelByLocationRoutePath(Continent.AMERICA)}>America</Link>
      <Link to={getTravelByLocationRoutePath(Continent.AFRICA)}>Africa</Link>
      <div
        onClick={() =>
          document.documentElement.setAttribute("data-theme", "dark")
        }
      >
        Theme
      </div>
    </div>
  );
};

export { MainPage };
