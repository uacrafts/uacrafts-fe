import styles from "../BtnBuy/BtnBuy.module.scss";
import React from "react";
// import React from "react";

interface BtnRectangleProps {
  title: string;
}

const BtnBuy: React.FC<BtnRectangleProps> = ({ title }) => {
  return (
    <button className={styles.btnBuy}>
      <h3>{title}</h3>
    </button>
  );
};

export default BtnBuy;
