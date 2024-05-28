import styles from "../BtnRectangle/BtnRectangle.module.scss";
import React from "react";

// import React from "react";

interface BtnRectangleProps {
    title: string;
    svgIcon?: React.ReactNode;
}

const BtnRectangle: React.FC<BtnRectangleProps> = ({title ,svgIcon}) => {

    return (
        <button className={styles.btnRectangle}>
            {svgIcon && <span className={styles.icon}>{svgIcon}</span>} {/* Відображаємо іконку, якщо вона передана */}
            <h3>{title}</h3>
        </button>
    );
};

export default BtnRectangle;