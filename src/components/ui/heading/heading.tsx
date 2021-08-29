import React from "react";
import { HeadingProps } from "./heading.type";
import cn from "classnames";
import styles from "./heading.module.css";

const heading = (props: HeadingProps) => {
  const { children } = props;
  const rootStyle = cn(styles.heading);
  return <div className={rootStyle}>{children}</div>;
};

export default heading;
