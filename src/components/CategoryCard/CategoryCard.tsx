import styles from "./CategoryCard.module.scss";
import React from "react";
import BtnRectangle from "../buttons/BtnRectangle/BtnRectangle.tsx";
import BtnHeart from "../buttons/BtnHeart/BtnHeart.tsx";
import { Link } from "react-router-dom";

interface CategoryCardProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  category: string;
  srcImage: string;
  sellerName: string;
  price: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  srcImage,
  sellerName,
  price,
  ...rest
}) => {
  return (
    <div className={styles.categoryCard}>
      <Link to="/product:id=1">
        <div className={styles.imageArea}>
          <img src={srcImage} alt="Item of category" />
        </div>
      </Link>
      <div className={styles.sellerNameArea}>
        <h4>{sellerName}</h4>
      </div>
      <div className={styles.reactionsArea}>
        <BtnHeart />
      </div>
      <div className={styles.categoryArea}>
        <h3>{category}</h3>
      </div>
      <div className={styles.priceArea}>
        <input type="number" value={price} readOnly {...rest} />
      </div>
      <div className={styles.actionArea}>
        <BtnRectangle title="Купити" />
      </div>
    </div>
  );
};

export default CategoryCard;
