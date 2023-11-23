import React from "react";
import { PageRoutes } from "./routes/PageRoutes";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { NavProvider } from "./contexts/NavProvider";

const App = () => {
  return (
    <ThemeProvider>
      <NavProvider>
        <PageRoutes />
      </NavProvider>
    </ThemeProvider>
  );
};

export default App;
