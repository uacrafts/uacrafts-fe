import styles from "./CatalogueCard.module.scss"
import React from 'react';

interface CatalogueCardProps {
    title: string;
    srcImage: string;
}

const CatalogueCard: React.FC<CatalogueCardProps> = ({ title, srcImage }) => {

    return (
        <div className={styles.catalogueCard}>
            <img src={srcImage} alt="Item of catalogue" />
            <h3>{title}</h3>
        </div>
    );
};

export default CatalogueCard;