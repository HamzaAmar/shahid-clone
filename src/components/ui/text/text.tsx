import React from "react";
import { TextProps } from "./text.type";
import cn from "classnames";
import styles from "./text.module.css";

const text = (props: TextProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default text;
