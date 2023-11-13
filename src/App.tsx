import React from "react";
import styles from "./styles/main.module.scss";
import { PageRoutes } from "./pages/PageRoutes";

const App = () => (
  <div className={styles.App}>
    <PageRoutes />
  </div>
);

export default App;
