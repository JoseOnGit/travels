import React, { useEffect } from "react";
import { PageRoutes } from "./routes/PageRoutes";
import { ThemeContext } from "./components/ThemeProvider";

const App = () => {
  const { theme } = React.useContext(ThemeContext);

  useEffect(
    () => document.documentElement.setAttribute("data-theme", theme),
    [theme]
  );

  return <PageRoutes />;
};

export default App;
