import React, { FC, ReactElement } from "react";
import classNames from "classnames";

import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";

import styles from "./Tab.module.scss";


type TabsProps = {
  title: string | ReactElement;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
};

const Tab: FC<TabsProps> = ({ title, onClick, disabled, active }) => {

  const { themeValue } = useThemeContext();
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={classNames(styles.tab, {
        [styles.dark]: themeValue === Theme.Dark,
        [styles.active]: active,
        [styles.disabled]: disabled,
      })}
    >
      {title}
    </div>
  );
};
export default Tab;
