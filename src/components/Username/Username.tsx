import React, { FC } from "react";

import styles from "./Username.module.scss";
import classNames from "classnames";

type UsernameProps = {
  username: string;
  className?: string;

};

const Username: FC<UsernameProps> = ({ username, className }) => {
  if (!username) {
    return null;
  }

  return (
    <div className={classNames(className, styles.container)}>
      <div className={styles.initials}>{username[0].toUpperCase()}</div>
      <div className={styles.username}>{username}</div>
    </div>
  );
};

export default Username;