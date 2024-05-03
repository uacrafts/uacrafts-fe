import styles from "./CatalogueCard.module.scss";
import React from "react";
import { Link } from "react-router-dom";

interface CatalogueCardProps {
  title: string;
  srcImage: string;
}

const CatalogueCard: React.FC<CatalogueCardProps> = ({ title, srcImage }) => {
  return (
    <Link to="/subcategory">
      <div className={styles.catalogueCard}>
        <img src={srcImage} alt="Item of catalogue" />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default CatalogueCard;
