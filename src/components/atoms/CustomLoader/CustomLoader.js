import React from "react";
import { customLoaderStyles } from "./CustomLoader.styles";

export const CustomLoader = ({ size }) => {
  const classes = customLoaderStyles();

  return (
    <span
      className={
        size === "small"
          ? `${classes.loader} ${classes.small}`
          : size === "medium"
          ? `${classes.loader} ${classes.medium}`
          : size === "large" && `${classes.loader} ${classes.large}`
      }
    ></span>
  );
};
