import React from "react";
import styles from "./Lightbox.module.css";
import Layout from "../Layout";

const Lightbox = ({ children, close }) => {
  const closeBox = () => {
    close();
  };
  return (
    <div className={styles.lightBox}>
      <Layout size style={{ backgroundColor: "black" }}>
        <button onClick={closeBox}>X</button>
        {children}
      </Layout>
    </div>
  );
};

export default Lightbox;
