import React from "react";
import cn from "classnames";
import styles from "./button.module.css";
import { ButtonProps } from "./button.type";

const button = (props: ButtonProps) => {
  const {
    children,
    radius = "none",
    variant = "contained",
    size = "sm",
    ...rest
  } = props;
  const root = cn(styles.btn, {
    [styles.rounded]: radius === "rounded",
    [styles.full]: radius === "full",
    [styles.none]: radius === "none",
    [styles.contained]: variant === "contained",
    [styles.outline]: variant === "outline",
    [styles.sm]: size === "sm",
    [styles.md]: size === "md",
    [styles.lg]: size === "lg",
  });
  return (
    <button className={root} {...rest}>
      {children}
    </button>
  );
};

export default button;
