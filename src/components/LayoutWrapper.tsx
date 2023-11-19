import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { PageHeader } from "./PageHeader";
import { MainNavigation } from "./MainNavigation/MainNavigation";

type Props = {};

const LayoutWrapper: FC<Props> = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  console.log("%c⧭ navIsOpen ", "color: #807160", navIsOpen);

  return (
    <>
      <PageHeader isOpen={navIsOpen} setIsOpen={setNavIsOpen} />
      <MainNavigation isOpen={navIsOpen} setIsOpen={setNavIsOpen} />
      <Outlet />
    </>
  );
};

export { LayoutWrapper };
