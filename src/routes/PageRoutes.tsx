import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { ContinentPage } from "../pages/ContinentPage";
import { ScrollToTop } from "../components/ScrollToTop";
import { TripDetailPage } from "../pages/TripDetailPage";
import { LayoutWrapper } from "../components/LayoutWrapper";

type Props = {};

const routes = [
  {
    path: "/",
    page: <MainPage />,
  },
  {
    path: "/travelsByLocation/:continent",
    page: <ContinentPage />,
  },
  {
    path: "/tripDetail/:trip",
    page: <TripDetailPage />,
  },
  {
    path: "/contact",
    page: <div />,
  },
];

const PageRoutes: FC<Props> = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<LayoutWrapper />}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.page} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);

export { PageRoutes };
