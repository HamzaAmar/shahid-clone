import classNames from "classnames";
import React from "react";
import styles from "./input.module.css";
import cn from "classnames";

const input = () => {
  const root = cn(styles.input);
  return <input className={root}></input>;
};

export default input;
