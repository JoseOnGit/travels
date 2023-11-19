import React, { FC } from "react";
import cx from "classnames";
import styles from "../../styles/navigation.module.scss";
import { PageHeader } from "../PageHeader";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
};

const MainNavigation: FC<Props> = ({ isOpen, setIsOpen }) => {
  const classes = isOpen ? cx(styles.mainNav, styles.open) : styles.mainNav;

  return (
    <div className={classes}>
      <PageHeader isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export { MainNavigation };
