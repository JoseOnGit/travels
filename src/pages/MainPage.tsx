import React, { FC } from "react";
import { Link } from "react-router-dom";
import { getTravelByLocationRoutePath } from "../routes/routePaths";
import { Continent } from "../constants/constants";
import { ThemeContext } from "../components/ThemeProvider";
import "../styles/main.module.scss";

type Props = {};

const MainPage: FC<Props> = () => {
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>MainPage</div>
      <Link to={getTravelByLocationRoutePath(Continent.EUROPE)}>Europe</Link>
      <Link to={getTravelByLocationRoutePath(Continent.ASIA)}>Asia</Link>
      <Link to={getTravelByLocationRoutePath(Continent.AMERICA)}>America</Link>
      <Link to={getTravelByLocationRoutePath(Continent.AFRICA)}>Africa</Link>
      <br />
      <br />
      <div onClick={toggleTheme}>Theme</div>
    </div>
  );
};

export { MainPage };
