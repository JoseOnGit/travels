import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { PageHeader } from "./PageHeader";
import { MainNavigation } from "./MainNavigation/MainNavigation";

type Props = {};

const LayoutWrapper: FC<Props> = () => {
  return (
    <>
      <PageHeader />
      <MainNavigation />
      <Outlet />
    </>
  );
};

export { LayoutWrapper };
