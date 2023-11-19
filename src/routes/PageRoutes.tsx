import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { ContinentPage } from "../pages/ContinentPage";
import { ScrollToTop } from "../components/ScrollToTop";
import { TripDetailPage } from "../pages/TripDetailPage";

type Props = {};

const PageRoutes: FC<Props> = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/travelByLocation/:continent" element={<ContinentPage />} />
      <Route path="/tripDetail/:trip" element={<TripDetailPage />} />
    </Routes>
  </BrowserRouter>
);

export { PageRoutes };
