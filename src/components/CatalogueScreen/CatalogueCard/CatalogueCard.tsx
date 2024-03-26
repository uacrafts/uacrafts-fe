import styles from "./CatalogueCard.module.scss"
import React from 'react';

interface CatalogueCardProps {
    title: string;
    srcImage: string;
}

const CatalogueCard: React.FC<CatalogueCardProps> = ({ title, srcImage }) => {
    // const cardStyle = {
    //     backgroundImage: `url(${srcImage})`,
    // };
    return (
        <div className={styles.catalogueCard}>
            {/*<div className={styles.imageCard} style={cardStyle}></div>*/}
            <img src={srcImage} alt="Item of catalogue" />
            <h3>{title}</h3>
        </div>
    );
};

export default CatalogueCard;