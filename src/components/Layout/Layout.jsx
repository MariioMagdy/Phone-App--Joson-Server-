import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children, size, style }) => {
  const { container, large, small } = styles;
  return (
    <div
      className={`${container} ${!size ? small : large}`}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};
export default Layout;
