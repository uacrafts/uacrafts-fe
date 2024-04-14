import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.tsx";
import React from "react";
import styles from "./ProductDetails.module.scss";

export interface BreadcrumbItem {
  path: string;
  label: string | React.JSX.Element;
}

const home = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.317 2.82394C12.563 2.16415 11.437 2.16415 10.683 2.82394L3.68299 8.94894C3.24896 9.32872 3 9.87737 3 10.4541V20.0003C3 21.1049 3.89543 22.0003 5 22.0003H19C20.1046 22.0003 21 21.1049 21 20.0003V10.4541C21 9.87737 20.751 9.32872 20.317 8.94895L13.317 2.82394ZM5 10.4541L12 4.3291L19 10.4541V20.0003H14V15.0002H10V20.0003H5V10.4541Z"
      fill="#364058"
    />
  </svg>
);

// Breadcrumbs for a product page
const productItems: BreadcrumbItem[] = [
  { path: "/", label: home },
  { path: "/category", label: "Декор" },
  { path: "/product:id=1", label: 'Свічка "Київський каштан"' },
];

const ProductDetails = () => {
  return (
    <div>
      <Breadcrumbs items={productItems} />
      <div className={styles.wrapper}>
        <div className={styles.productTitle}>Свічка "Київський каштан"</div>
        <img src="/src/assets/images/Rectangle 10.png" alt="Kandle" />
      </div>
    </div>
  );
};

export default ProductDetails;
