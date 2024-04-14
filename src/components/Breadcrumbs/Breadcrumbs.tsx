import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import { BreadcrumbItem } from "../../pages/ProductDetails/ProductDetails.tsx";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const location = useLocation();

  // Check if the current location matches any of the breadcrumb paths
  const shouldDisplay = items.some((item) => item.path === location.pathname);

  if (!shouldDisplay) {
    return null; // Don't render breadcrumbs if not on a specific page
  }

  return (
    <nav className={styles.breadcrumbs}>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={
              isActive(item.path, location.pathname) ? styles.active : ""
            }
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Function to check if a path is active
const isActive = (currentPath: string, pathname: string) => {
  return currentPath === pathname;
};

export default Breadcrumbs;
