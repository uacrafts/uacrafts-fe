import styles from "../BtnRectangle/BtnRectangle.module.scss";
import React from "react";
// import React from "react";

interface BtnRectangleProps {
    title: string;
}

const BtnRectangle: React.FC<BtnRectangleProps> = ({ title})=> {

    return (
        <button className={styles.btnRectangle}>
            <h3>{title}</h3>
        </button>
    );
};

export default BtnRectangle;